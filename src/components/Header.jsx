import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../redux/slices/ProductSlice';
import { login, logout } from '../redux/slices/AuthSlice';  // ADD
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';  // import Link for login page

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
    const cartCount = useSelector((state) => state.cart.cartItems.length);



      const wishlistCount = useSelector(
    (state) => state.wishlist.wishlistItems.length
  );


  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);  // GET LOGIN STATUS

  const handleSearch = (e) => {
    setQuery(e.target.value);
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <header className="flex justify-between items-center px-8 py-4 shadow-md bg-white fixed w-full top-0 z-50">
      <div className="font-bold text-xl">🛍️ ShopEase</div>

      <div className="flex items-center gap-4">
        {showSearch && (
          <motion.input
            initial={{ width: 0 }}
            animate={{ width: 200 }}
            exit={{ width: 0 }}
            value={query}
            onChange={handleSearch}
            placeholder="Search products..."
            className="border px-2 py-1 rounded-md"
          />
        )}
        <button onClick={() => setShowSearch(!showSearch)}>🔍</button>
       

        <header>
      <Link to="/wishlist">
        <button>❤️
            ({wishlistCount})

        </button>
      </Link>
    </header>


 <header>
      <Link to="/cart">
        <button>
          🛒({cartCount})
        </button>
      </Link>
    </header>
            <button>🔔</button>

        {/* 🔹 CONDITION HERE */}
        {isLoggedIn ? (
          <button
            onClick={() => dispatch(logout())}
            className="bg-red-500 text-white px-3 py-1 rounded-md"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button
              onClick={() => dispatch(login())}
              className="bg-blue-500 text-white px-3 py-1 rounded-md"
            >
              Login
            </button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
