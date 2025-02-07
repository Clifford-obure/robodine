import {
  FaHome,
  FaChartBar,
  FaGift,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa"; // Import icons
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="md:flex md:flex-col bg-red-800 h-screen">
      <div className="p-4 text-white">
        <div className="w-10 h-10 bg-white rounded-full overflow-hidden">
          <img
            src="https://img.freepik.com/premium-photo/delicious-fresh-burger-isolated-white-background_93675-104922.jpg?ga=GA1.1.192008204.1730055389&semt=ais_hybrid"
            alt="User Avatar"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <ul className="p-4 space-y-2">
        <li className="hover:bg-gray-200 rounded">
          <Link
            to="/home"
            className="block p-2 text-white hover:text-gray-900 flex items-center"
          >
            {" "}
            {/* Flexbox for icon and text alignment */}
            <FaHome className="mr-2" /> Home
          </Link>
        </li>
        <li className="hover:bg-gray-200 rounded">
          <Link
            to="/cart"
            className="block p-2 text-white hover:text-gray-900 flex items-center"
          >
            <FaChartBar className="mr-2" /> Cart
          </Link>
        </li>
        <li className="hover:bg-gray-200 rounded">
          <Link
            to="/refer"
            className="block p-2 text-white hover:text-gray-900 flex items-center"
          >
            <FaGift className="mr-2" /> Refer and earn
          </Link>
        </li>
        <li className="hover:bg-gray-200 rounded">
          <Link
            to="/profile"
            className="block p-2 text-white hover:text-gray-900 flex items-center"
          >
            <FaUser className="mr-2" /> Profile
          </Link>
        </li>
      </ul>

      <div className="mt-auto p-4 hover:bg-gray-200 rounded">
        <Link
          to="/"
          className="text-white hover:text-gray-900 flex items-center"
        >
          Sign out <FaSignOutAlt className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
