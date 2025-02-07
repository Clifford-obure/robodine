// import { MdOutlineCancelPresentation } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import burger from "../../../assets/burger 1.png";
import buritto from "../../../assets/buritto 1.png";
import taco from "../../../assets/taco 1.png";
import logo from "../../../assets/robodineLogo.png";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/home");
    // Navigation logic here

    console.log("Navigate to next screen");
  };

  return (
    <div className="h-screen bg-red-500 relative overflow-hidden">
      <div className="absolute top-6 left-6 text-white hover:bg-red-600 rounded-full p-1">
        <img src={logo} alt="Taco" className="w-24 h-24 object-contain" />
        {/* <MdOutlineCancelPresentation size={20} /> */}
      </div>
      <div className="max-w-md mx-auto px-6 py-8 relative ">
        {/* Close button */}
        <div className="flex flex-col">
          {/* Title with proper styling */}
          <div className="mt-30 mb-12">
            <h1 className="text-white text-3xl font-extrabold tracking-tight leading-tight">
              Meals for
              <br />
              champions
            </h1>
          </div>
        </div>

        {/* Food illustrations container */}
        <div className="relative h-80 mb-0">
          {/* Main burger illustration - larger and centered */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <img
              src={burger}
              alt="Burger"
              className="w-100 h-100 object-contain"
            />
          </div>

          {/* Left taco - tilted */}
          <div className="absolute left-4 top-1/2">
            <div className="transform -rotate-12">
              <img src={taco} alt="Taco" className="w-24 h-24 object-contain" />
            </div>
          </div>

          {/* Right burrito - tilted opposite */}
          <div className="absolute right-4 top-1/3">
            <div className="transform rotate-12">
              <img
                src={buritto}
                alt="Burrito"
                className="w-24 h-24 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Arrow button */}
        <div className="flex justify-center">
          <button
            onClick={handleNext}
            className="bg-white rounded-full p-2 hover:bg-gray-100 z-10 transition-colors duration-200 shadow-lg flex items-center"
          >
            <div className="text-red-500">Proceed </div>
            <FaChevronRight size={18} className="text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
