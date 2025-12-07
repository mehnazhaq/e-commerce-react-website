const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-8 p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h2 className="font-bold mb-2">About Us</h2>
          <p>ShopEase is your one-stop shop for all categories of products.</p>
        </div>

        <div>
          <h2 className="font-bold mb-2">Quick Links</h2>
          <ul>
            <li>Home</li>
            <li>Categories</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold mb-2">Subscribe</h2>
          <input type="email" placeholder="Enter your email" className="p-2 w-full rounded-md text-black" />
          <button className="bg-blue-500 mt-2 px-4 py-1 rounded-md">Subscribe</button>
          <p className="mt-4">📞 +91-9876543210 | ✉️ support@shopease.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
