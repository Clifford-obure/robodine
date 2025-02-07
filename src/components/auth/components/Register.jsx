import { useState } from "react";
import logo from "../../../assets/robodineLogo.png";
import { AiFillEyeInvisible } from "react-icons/ai";
import { MdVisibility } from "react-icons/md";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        {/* Logo and Title */}
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="Logo" className="h-16 w-auto mb-2" />
          <h2 className="text-2xl font-bold text-gray-800">ROBO DINE</h2>
          <p className="text-gray-600 mt-1">Welcome to robo dine</p>
        </div>

        {/* Provider Login Button */}
        <button className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg mb-4 flex items-center justify-center hover:bg-gray-50">
          <img
            src="https://banner2.cleanpng.com/20180610/jeu/aa8r2y6ex.webp"
            alt="Login Icon"
            className="h-10 w-15 mr-1"
          />
          <span>Register</span>
        </button>

        {/* Separator */}
        <div className="flex items-center mb-4">
          <hr className="w-1/2" />
          <span className="mx-2 text-gray-500">Or</span>
          <hr className="w-1/2" />
        </div>

        {/* Form Inputs */}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email address
          </label>
          <input
            type="text"
            id="username"
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter your User name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            User name
          </label>
          <input
            type="text"
            id="username"
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter your User name"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your Password"
            />
            <span
              className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <MdVisibility /> : <AiFillEyeInvisible />}
            </span>
          </div>
        </div>

        {/* Remember Me and Forgot Password */}
        <div className="flex justify-between items-center mb-6">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-red-700 mr-2"
            />
            <span className="text-gray-700 text-sm">Remember me</span>
          </label>
          <Link
            to="/auth/login"
            className="text-red-700 text-sm hover:underline"
          >
            Alredy have an account ?
          </Link>
        </div>

        <button
          className="w-full bg-red-700 text-white py-2 px-4 rounded-lg hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-200"
          onClick={() => navigate("/auth/login")}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
