import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/slices/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, totalPrice } = useSelector((state) => state.cart);

  return (
    <div className="container mx-auto py-20 px-4">

      {/* PAGE TITLE */}
      <h2 className="text-3xl font-bold text-center mb-10">Shopping Cart</h2>

      {/* IF CART EMPTY */}
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">

          {/* LEFT SIDE - CART TABLE */}
          <div className="w-full lg:w-2/3">
            <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-100 text-left">
                <tr>
                  <th className="p-4">Product</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Quantity</th>
                  <th className="p-4">Total</th>
                  <th className="p-4"></th>
                </tr>
              </thead>

              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-4 flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <span className="font-semibold">{item.title}</span>
                    </td>

                    <td className="p-4">₹{item.price.toFixed(2)}</td>

                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => dispatch(decreaseQuantity(item.id))}
                          className="px-2 bg-gray-200 hover:bg-gray-300 rounded"
                        >
                          -
                        </button>
                        <span className="px-3">{item.quantity}</span>
                        <button
                          onClick={() => dispatch(increaseQuantity(item.id))}
                          className="px-2 bg-gray-200 hover:bg-gray-300 rounded"
                        >
                          +
                        </button>
                      </div>
                    </td>

                    <td className="p-4 font-semibold">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </td>

                    <td className="p-4">
                      <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="text-red-500 hover:text-red-700"
                      >
                        ✖
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* RIGHT SIDE - CART TOTAL */}
          <div className="w-full lg:w-1/3 bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Cart Total</h3>

            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span className="font-semibold">₹{totalPrice.toFixed(2)}</span>
            </div>

            <div className="my-4">
              <p className="font-medium mb-2">Shipping:</p>
              <label className="block">
                <input type="radio" name="shipping" defaultChecked /> Free Shipping — ₹0
              </label>
              <label className="block">
                <input type="radio" name="shipping" /> Standard — ₹10
              </label>
              <label className="block">
                <input type="radio" name="shipping" /> Express — ₹20
              </label>
            </div>

            <div className="flex justify-between text-lg font-bold mt-4 border-t pt-4">
              <span>Total:</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>

            <button className="mt-6 w-full bg-[#FFA725] hover:bg-[#d8841d] text-white py-3 rounded-lg font-bold">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      )}

      {/* CONTINUE SHOPPING */}
      <div className="mt-8 text-center">
        <button className="bg-gray-200 hover:bg-gray-300 py-2 px-6 rounded-md">
          CONTINUE SHOPPING
        </button>
      </div>
    </div>
  );
};

export default Cart;
