import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/AuthSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("abac@gmail.com");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password.length >= 6) {
      dispatch(login());    // update redux store
      navigate("/");        // redirect to dashboard
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FFF5E4]">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="email" className="w-full px-4 py-2 border rounded-md"
            placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" className="w-full px-4 py-2 border rounded-md"
            placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
          
          <button type="submit" className="w-full bg-orange-400 text-white py-2 rounded-md">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
