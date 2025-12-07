import { useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/slices/CartSlice";



const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL

    const dispatch = useDispatch();
    const navigate = useNavigate();
  
const products = useSelector((state) => state.productDetails.productList || []);
console.log("Products in ProductDetails:", products);

  const product = products.find((p) => p.id === parseInt(id)); // Find product
  const [quantity, setQuantity] = useState(1);


   const cartItems = useSelector((state) => state.cart.cartItems);
  const isInCart = Array.isArray(cartItems) && cartItems.some((item) => item.id === product.id);
  
  
      const handleAddToCart = () => {
      if (isInCart) {
        navigate("/cart");
      } else {
        dispatch(addToCart(product));
      }
    };
  
  

  if (!product) {
    return <h2 className="text-center text-red-600 mt-20">Product not found!</h2>;
  }

  return (
    <div className="max-w-6xl mx-auto pt-24 px-6 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Image */}
        <div>
        <img
  src={product.image}
  alt={product.title}
  className="rounded-lg shadow-lg w-full h-80 object-contain"
/>

        </div>

        {/* Details */}
        <div>
          <h2 className="text-3xl font-bold">{product.title}</h2>
          
          {/* Price */}
          <div className="mt-3">
            <span className="text-2xl font-semibold text-green-600">₹{product.price-product.price*10/100}</span>
            <span className="line-through text-gray-500 ml-2">₹{product.price}</span>
          </div>

          {/* Rating */}
<p className="mt-2 text-yellow-500">
  ⭐ {product?.rating?.rate} / 5
</p>

          {/* Quantity */}
          <div className="mt-4 flex items-center gap-3">
            <label htmlFor="qty">Units:</label>
            <input
              id="qty"
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="border rounded-md px-2 py-1 w-20"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
          <button
          onClick={handleAddToCart}
          className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
        > {isInCart ? "Go to Cart" : "Add to Cart"}
          🛒 
        </button>
            <button className="border border-gray-400 px-4 py-2 rounded-md">
              ❤️ Add to Favourite
            </button>
          </div>

          {/* Offers */}
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <h3 className="font-semibold">Available Offers</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>5% cashback on Credit Card</li>
              <li>Free Delivery for Prime Users</li>
              <li>No Cost EMI Available</li>
            </ul>
          </div>

          {/* Delivery Info */}
          <div className="mt-4">
            <p className="text-gray-600">📦 Delivery by: <b>3-5 Business Days</b></p>
          </div>

        </div>
      </div>

      {/* Product Details */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-2">Product Details</h3>
        <p className="text-gray-700">{product.description}</p>
      </div>

      {/* Key Features */}
     
    </div>
  );
};

export default ProductDetails;
