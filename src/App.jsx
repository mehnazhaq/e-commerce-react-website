import { Routes, Route } from "react-router-dom"; // ✅ MUST IMPORT
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Wishlist from "./pages/Wishlist";
import Policies from "./components/Policies";




import Login from './pages/Login'; // ✅ Also import Login

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Dashboard />} />  {/* Default Page */}
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
  <Route path="/wishlist" element={<Wishlist />} />


      </Routes>
        <Policies />   {/* <-- This will show on ALL pages */}


      <Footer />
    </>
  );
}

export default App;
