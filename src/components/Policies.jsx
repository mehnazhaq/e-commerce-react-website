import { FaShippingFast } from "react-icons/fa";
import { MdReplay, MdSupportAgent } from "react-icons/md";



const Policies = () => {
  return (
    <div className="w-full py-10 bg-gray-50 border-t mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        
        {/* Free Shipping */}
        <div>
          <FaShippingFast size={35} className="mx-auto text-gray-700" />
          <h3 className="font-semibold mt-2">Free Shipping</h3>
          <p className="text-gray-500 text-sm">Orders $50 or more</p>
        </div>

        {/* Free Returns */}
        <div>
          <MdReplay size={35} className="mx-auto text-gray-700" />
          <h3 className="font-semibold mt-2">Free Returns</h3>
          <p className="text-gray-500 text-sm">Within 30 days</p>
        </div>

        {/* Support */}
        <div>
          <MdSupportAgent size={35} className="mx-auto text-gray-700" />
          <h3 className="font-semibold mt-2">We Support</h3>
          <p className="text-gray-500 text-sm">24/7 amazing services</p>
        </div>

      </div>
    </div>
  );
};

export default Policies;
