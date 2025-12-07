import React, { useEffect } from "react";  // 👈 ADD useEffect here!

import { useDispatch,useSelector } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";
import { useNavigate } from "react-router-dom";
import { addToWishlist, removeFromWishlist } from "../redux/slices/WishlistSlice";


import { motion } from "framer-motion";
import { Link } from "react-router-dom";   // 👈 Import Link
import { addSingleProduct } from "../redux/slices/ProductDetailSlice";  // 👈 IMPORT THIS


const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
    const navigate = useNavigate();

  const wishlist = useSelector((state) => state.wishlist.wishlistItems);
  const isInWishlist = wishlist.some((item) => item.id === product.id);

    
  const cartItems = useSelector((state) => state.cart.cartItems);
const isInCart = Array.isArray(cartItems) && cartItems.some((item) => item.id === product.id);


    const handleAddToCart = () => {
    if (isInCart) {
      navigate("/cart");
    } else {
      dispatch(addToCart(product));
    }
  };


    const toggleWishlist = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };



    useEffect(() => {
    dispatch(addSingleProduct(product));  // 👈 ADD THIS
  }, [product, dispatch]);

  // Calculate discount
  const discount = product.price * 0.2;
  const discountedPrice = (product.price - discount).toFixed(2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      className="border rounded-lg p-4 shadow-md bg-white flex flex-col justify-between"
    >

      {/* CLICK IMAGE TO SEE DETAILS */}
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain mb-4 cursor-pointer"
        />
      </Link>

      {/* CLICK TITLE TO SEE DETAILS */}
      <Link to={`/product/${product.id}`}>
        <h3 className="text-lg font-semibold line-clamp-2 cursor-pointer">
          {product.title}
        </h3>
      </Link>

      {/* Price Section */}
      <div className="mt-2">
        <p className="text-red-600 font-bold">₹{discountedPrice}</p>
        <p className="text-gray-500 line-through text-sm">₹{product.price}</p>
      </div>

      {/* Ratings */}
      <div className="flex items-center gap-1 text-yellow-500 mt-2">
        {Array(Math.round(product.rating.rate))
          .fill("⭐")
          .map((star, i) => (
            <span key={i}>{star}</span>
          ))}
        <span className="text-gray-600 text-sm">
          ({product.rating.count})
        </span>
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handleAddToCart}
          className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
        > {isInCart ? "Go to Cart" : "Add to Cart"}
          🛒 
        </button>
        <button  className={`mt-2 p-2 rounded-full ${
          isInWishlist ? "bg-red-500 text-white" : "bg-gray-200"
        }`}  onClick={toggleWishlist}>
          ❤️
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
