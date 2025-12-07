import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../redux/slices/WishlistSlice";
import { addToCart } from "../redux/slices/CartSlice";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  return (
    <div className="px-10 py-14">

      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold py-8">Wishlist</h1>
        <p className="text-gray-500 mt-2">Shop</p>
      </div>

      {/* Breadcrumb */}
      

       <header>
      <Link to="/">
<       div className="text-sm mb-10 text-gray-500">
        Home/Shop <span className="text-black font-semibold"></span>
      </div>
      </Link>
    </header>

      {/* Wishlist Table */}
      <div className="border rounded-xl shadow-sm bg-white overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="p-5 text-left text-gray-600 font-semibold">Product</th>
              <th className="p-5 text-left text-gray-600 font-semibold">Price</th>
              <th className="p-5 text-left text-gray-600 font-semibold">Stock Status</th>
              <th className="p-5"></th>
            </tr>
          </thead>

          <tbody>
            {wishlistItems.length === 0 && (
              <tr>
                <td colSpan="4" className="p-8 text-center text-gray-500">
                  Your wishlist is empty.
                </td>
              </tr>
            )}

            {wishlistItems.map((item) => (
              <tr
                key={item.id}
                className="border-t hover:bg-gray-50 transition"
              >
                {/* Product */}
                <td className="p-5">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded-md border"
                    />
                    <span className="font-medium text-gray-500">{item.title}</span>
                  </div>
                </td>

                {/* Price */}
                <td className="p-5 font-semibold text-gray-700">
                  ${item.price}
                </td>

                {/* Stock Status */}
                <td className="p-5">
                
                    <span className="text-green-600 font-semibold">In stock</span>
                  
                </td>

                {/* Buttons */}
                <td className="p-5">
                  <div className="flex justify-end items-center gap-4">

                    {/* Add to Cart Button */}
                    <button
                      onClick={() => dispatch(addToCart(item))}
                      className="px-4 py-2 border rounded-md text-sm hover:bg-gray-100 transition"
                    >
                      Add to Cart
                    </button>

                    {/* Delete Button */}
                    <button
                      onClick={() => dispatch(removeFromWishlist(item.id))}
                      className="p-2 hover:bg-red-100 rounded-full transition"
                      title="Remove"
                    >
                      <svg width="17" height="17" viewBox="0 0 20 20" fill="none">
                        <line x1="4" y1="4" x2="16" y2="16" stroke="red" strokeWidth="2" />
                        <line x1="16" y1="4" x2="4" y2="16" stroke="red" strokeWidth="2" />
                      </svg>
                    </button>

                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Share Icons */}
      <div className="mt-10 flex gap-6 text-gray-500 text-xl">
        <i className="fab fa-facebook cursor-pointer hover:text-black"></i>
        <i className="fab fa-twitter cursor-pointer hover:text-black"></i>
        <i className="fab fa-linkedin cursor-pointer hover:text-black"></i>
        <i className="fab fa-instagram cursor-pointer hover:text-black"></i>
      </div>

    </div>
  );
};

export default Wishlist;
