// import { useState } from "react";
// import { FaArrowLeft } from "react-icons/fa";
// import { FaMinus, FaPlus } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const Orders = () => {
//   const [customizing, setCustomizing] = useState(false);
//   const [selectedDate, setSelectedDate] = useState("21 Jan");
//   const [quantity, setQuantity] = useState(1);
//   const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
//   const [currentItem, setCurrentItem] = useState(null);
//   const navigate = useNavigate();

//   // Track customizations for each item
//   const [customizations, setCustomizations] = useState({});

//   const cartItems = [
//     {
//       id: 1,
//       name: "Chicken Flamed",
//       price: 250,
//       image:
//         "https://t3.ftcdn.net/jpg/03/39/18/64/240_F_339186423_xw0gYCfjgYplBeLi4AWgdEAiMO6Qwfrj.jpg",
//     },
//     {
//       id: 2,
//       name: "Flamed Grilled Chicken",
//       price: 250,
//       image:
//         "https://t4.ftcdn.net/jpg/06/23/35/11/240_F_623351194_0nmMWiIetpoL3w4tf0EuCpXkPDj3gRi0.jpg",
//     },
//     {
//       id: 3,
//       name: "Flamed Grilled Chicken",
//       price: 250,
//       image:
//         "https://t4.ftcdn.net/jpg/07/22/91/87/240_F_722918754_DZ7hGSBXerVFFrulH3IS3weFbZXIwFIU.jpg",
//     },
//     {
//       id: 4,
//       name: "Flamed Grilled Chicken",
//       price: 250,
//       image:
//         "https://t4.ftcdn.net/jpg/10/02/90/19/240_F_1002901929_7FdQToIoU1kLfDyyocFUD1KU7sf5ceqv.jpg",
//     },
//     {
//       id: 5,
//       name: "Flamed Grilled Chicken",
//       price: 250,
//       image:
//         "https://t3.ftcdn.net/jpg/08/20/18/06/240_F_820180662_tUp8LOZYqcogme2i15fagXmk1VsuMCYt.jpg",
//     },
//   ];

//   const timeSlots = [
//     "08:00 AM - 09:00 AM",
//     "09:00 AM - 10:00 AM",
//     "10:00 AM - 11:00 AM",
//     "11:00 AM - 12:00 PM",
//     "12:00 PM - 01:00 PM",
//     "01:00 PM - 02:00 PM",
//     "02:00 PM - 03:00 PM",
//     "03:00 PM - 04:00 PM",
//   ];

//   const daysOfWeek = [
//     { date: "21 Jan", label: "Sun" },
//     { date: "22 Jan", label: "Mon" },
//     { date: "23 Jan", label: "Tue" },
//     { date: "24 Jan", label: "Wed" },
//     { date: "25 Jan", label: "Thur" },
//     { date: "26 Jan", label: "Fri" },
//     { date: "27 Jan", label: "Sat" },
//   ];

//   const total = cartItems.reduce((sum, item) => sum + item.price, 0);

//   const handleCustomizeClick = (item) => {
//     setCurrentItem(item);
//     // Load existing customizations if any
//     if (customizations[item.id]) {
//       const { date, timeSlot, quantity } = customizations[item.id];
//       setSelectedDate(date);
//       setSelectedTimeSlot(timeSlot);
//       setQuantity(quantity);
//     } else {
//       // Reset to defaults if no customization exists
//       setSelectedDate("21 Jan");
//       setSelectedTimeSlot("");
//       setQuantity(1);
//     }
//     setCustomizing(true);
//   };

//   const handleBookSlot = () => {
//     if (currentItem && selectedTimeSlot) {
//       setCustomizations({
//         ...customizations,
//         [currentItem.id]: {
//           date: selectedDate,
//           timeSlot: selectedTimeSlot,
//           quantity: quantity,
//         },
//       });
//     }
//     setCustomizing(false);
//   };

//   const CustomizationOverlay = () => (
//     <div className="fixed inset-x-0 bottom-0 h-[70vh] bg-white rounded-t-3xl shadow-lg z-50 border-2 m-1">
//       <div className="p-6 h-full overflow-y-auto">
//         <h2 className="text-lg font-semibold mb-4">Schedule your meal</h2>

//         {/* Date Selection */}
//         <div className="flex gap-4 mb-6 overflow-x-auto">
//           {daysOfWeek.map((day) => (
//             <button
//               key={day.date}
//               className={`flex-shrink-0 px-2 py-2 rounded-full ${
//                 selectedDate === day.date
//                   ? "bg-red-700 text-white"
//                   : "bg-gray-100"
//               }`}
//               onClick={() => setSelectedDate(day.date)}
//             >
//               <div className="text-sm whitespace-nowrap">{day.date}</div>
//               <div className="text-xs whitespace-nowrap">{day.label}</div>
//             </button>
//           ))}
//         </div>

//         {/* Time Slots Grid */}
//         <div className="grid grid-cols-2 gap-3 mb-6">
//           {timeSlots.map((slot, index) => (
//             <button
//               key={index}
//               className={`p-3 rounded-xl border ${
//                 selectedTimeSlot === slot
//                   ? "border-red-500 bg-red-50"
//                   : "border-gray-200"
//               }`}
//               onClick={() => setSelectedTimeSlot(slot)}
//             >
//               <div className="text-sm">{slot}</div>
//               <div className="text-sm font-semibold">KES 250</div>
//             </button>
//           ))}
//         </div>

//         {/* Quantity Selector */}
//         <div className="mb-6 flex flex-row items-center justify-center">
//           <div className="text-sm font-medium mb-2">Quantity:</div>
//           <div className="flex items-center gap-4">
//             <button
//               className="w-8 h-8 rounded-full bg-red-700 text-white flex items-center justify-center"
//               onClick={() => setQuantity(Math.max(1, quantity - 1))}
//             >
//               <FaMinus className="w-4 h-4" />
//             </button>
//             <span className="text-lg font-medium">{quantity}</span>
//             <button
//               className="w-8 h-8 rounded-full bg-red-700 text-white flex items-center justify-center"
//               onClick={() => setQuantity(quantity + 1)}
//             >
//               <FaPlus className="w-4 h-4" />
//             </button>
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex gap-4 mt-auto">
//           <button
//             className="flex-1 py-3 rounded-lg border border-red-500 text-red-500"
//             onClick={() => setCustomizing(false)}
//           >
//             Cancel
//           </button>
//           <button
//             className="flex-1 py-3 rounded-lg bg-red-700 text-white"
//             onClick={handleBookSlot}
//             disabled={!selectedTimeSlot}
//           >
//             Book This Slot
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <div className="max-w-lg mx-auto bg-white min-h-screen md:min-h-0 md:my-8 md:rounded-lg md:shadow-lg relative">
//         {/* Header */}
//         <div className="p-4 border-b">
//           <div className="flex items-center">
//             <button
//               className="p-2 hover:bg-gray-100 rounded-full"
//               onClick={() => navigate("/home")}
//             >
//               <FaArrowLeft className="w-6 h-6" />
//             </button>
//             <h1 className="text-xl font-semibold ml-4">Your Orders</h1>
//           </div>
//         </div>

//         {/* Cart Items */}
//         <div className="p-4">
//           {cartItems.map((item) => (
//             <div key={item.id} className="flex items-center mb-4 last:mb-0">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-20 h-20 object-cover rounded-lg"
//               />
//               <div className="ml-4 flex-1 ">
//                 <h3 className="font-medium ">{item.name}</h3>
//                 <p className="text-red-500">KSH {item.price}</p>
//                 {customizations[item.id] && (
//                   <p className="text-sm text-gray-500 mt-1">
//                     {customizations[item.id].date} at{" "}
//                     {customizations[item.id].timeSlot} (Qty:{" "}
//                     {customizations[item.id].quantity})
//                   </p>
//                 )}
//               </div>
//               <button
//                 className="px-4 py-2 text-red-500 bg-red-50 rounded-full text-sm"
//                 onClick={() => handleCustomizeClick(item)}
//               >
//                 {customizations[item.id] ? "Edit" : "Customize"}
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* Total and Checkout */}
//         <div className="p-4 border-t mt-auto">
//           <div className="flex justify-between items-center mb-4">
//             <span className="font-medium">Total</span>
//             <span className="font-medium">KSH {total}</span>
//           </div>
//           <button
//             className="w-full bg-red-700 text-white py-3 rounded-lg font-medium hover:bg-red-600 transition-colors"
//             onClick={() => navigate("/auth/login")}
//           >
//             Continue Checkout
//           </button>
//         </div>

//         {/* Customization Overlay */}
//         {customizing && <CustomizationOverlay />}
//       </div>
//     </div>
//   );
// };

// export default Orders;

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FaArrowLeft } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const [customizing, setCustomizing] = useState(false);
  const [selectedDate, setSelectedDate] = useState("21 Jan");
  const [quantity, setQuantity] = useState(1);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [currentItem, setCurrentItem] = useState(null);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  // Get cart items from localStorage or initialize to an empty array
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  // Track customizations for each item
  const [customizations, setCustomizations] = useState({});

  useEffect(() => {
    // Save cartItems to localStorage whenever it changes
    if (user) {
      console.log("This user is Logged in");
    }
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  useEffect(() => {
    if (!user) {
      // Redirect to login if user is not logged in
      navigate("/auth/login");
    }
  }, [user, navigate]);

  const timeSlots = [
    "08:00 AM - 09:00 AM",
    "09:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 01:00 PM",
    "01:00 PM - 02:00 PM",
    "02:00 PM - 03:00 PM",
    "03:00 PM - 04:00 PM",
  ];

  const daysOfWeek = [
    { date: "21 Jan", label: "Sun" },
    { date: "22 Jan", label: "Mon" },
    { date: "23 Jan", label: "Tue" },
    { date: "24 Jan", label: "Wed" },
    { date: "25 Jan", label: "Thur" },
    { date: "26 Jan", label: "Fri" },
    { date: "27 Jan", label: "Sat" },
  ];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  ); // Calculate total with quantity

  const handleCustomizeClick = (item) => {
    setCurrentItem(item);
    // Load existing customizations if any
    if (customizations[item.id]) {
      const { date, timeSlot, quantity } = customizations[item.id];
      setSelectedDate(date);
      setSelectedTimeSlot(timeSlot);
      setQuantity(quantity);
    } else {
      // Reset to defaults if no customization exists
      setSelectedDate("21 Jan");
      setSelectedTimeSlot("");
      setQuantity(1);
    }
    setCustomizing(true);
  };

  const handleBookSlot = () => {
    if (currentItem && selectedTimeSlot) {
      setCustomizations({
        ...customizations,
        [currentItem.id]: {
          date: selectedDate,
          timeSlot: selectedTimeSlot,
          quantity: quantity,
        },
      });

      // Update cartItems with customization
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === currentItem.id
          ? {
              ...cartItem,
              quantity: quantity,
              date: selectedDate,
              timeSlot: selectedTimeSlot,
            }
          : cartItem
      );
      setCartItems(updatedCartItems);
    }
    setCustomizing(false);
  };

  const CustomizationOverlay = () => (
    <div className="fixed inset-x-0 bottom-0 h-[70vh] bg-white rounded-t-3xl shadow-lg z-50 border-2 m-1">
      <div className="p-6 h-full overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4">Schedule your meal</h2>

        {/* Date Selection */}
        <div className="flex gap-4 mb-6 overflow-x-auto">
          {daysOfWeek.map((day) => (
            <button
              key={day.date}
              className={`flex-shrink-0 px-2 py-2 rounded-full ${
                selectedDate === day.date
                  ? "bg-red-700 text-white"
                  : "bg-gray-100"
              }`}
              onClick={() => setSelectedDate(day.date)}
            >
              <div className="text-sm whitespace-nowrap">{day.date}</div>
              <div className="text-xs whitespace-nowrap">{day.label}</div>
            </button>
          ))}
        </div>

        {/* Time Slots Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {timeSlots.map((slot, index) => (
            <button
              key={index}
              className={`p-3 rounded-xl border ${
                selectedTimeSlot === slot
                  ? "border-red-500 bg-red-50"
                  : "border-gray-200"
              }`}
              onClick={() => setSelectedTimeSlot(slot)}
            >
              <div className="text-sm">{slot}</div>
              <div className="text-sm font-semibold">KES 250</div>
            </button>
          ))}
        </div>

        {/* Quantity Selector */}
        <div className="mb-6 flex flex-row items-center justify-center">
          <div className="text-sm font-medium mb-2">Quantity:</div>
          <div className="flex items-center gap-4">
            <button
              className="w-8 h-8 rounded-full bg-red-700 text-white flex items-center justify-center"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              <FaMinus className="w-4 h-4" />
            </button>
            <span className="text-lg font-medium">{quantity}</span>
            <button
              className="w-8 h-8 rounded-full bg-red-700 text-white flex items-center justify-center"
              onClick={() => setQuantity(quantity + 1)}
            >
              <FaPlus className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-auto">
          <button
            className="flex-1 py-3 rounded-lg border border-red-500 text-red-500"
            onClick={() => setCustomizing(false)}
          >
            Cancel
          </button>
          <button
            className="flex-1 py-3 rounded-lg bg-red-700 text-white"
            onClick={handleBookSlot}
            disabled={!selectedTimeSlot}
          >
            Book This Slot
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-lg mx-auto bg-white min-h-screen md:min-h-0 md:my-8 md:rounded-lg md:shadow-lg relative">
        {/* Header */}
        <div className="p-4 border-b">
          <div className="flex items-center">
            <button
              className="p-2 hover:bg-gray-100 rounded-full"
              onClick={() => navigate("/home")}
            >
              <FaArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-semibold ml-4">Your Orders</h1>
          </div>
        </div>

        {/* Cart Items */}
        <div className="p-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center mb-4 last:mb-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="ml-4 flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-red-500">KSH {item.price}</p>
                {customizations[item.id] && (
                  <p className="text-sm text-gray-500 mt-1">
                    {customizations[item.id].date} at{" "}
                    {customizations[item.id].timeSlot} (Qty:{" "}
                    {customizations[item.id].quantity})
                  </p>
                )}
                {/* Display quantity if available */}
                {item.quantity && <p>Quantity: {item.quantity}</p>}
              </div>
              <button
                className="px-4 py-2 text-red-500 bg-red-50 rounded-full text-sm"
                onClick={() => handleCustomizeClick(item)}
              >
                {customizations[item.id] ? "Edit" : "Customize"}
              </button>
            </div>
          ))}
        </div>

        {/* Total and Checkout */}
        <div className="p-4 border-t mt-auto">
          <div className="flex justify-between items-center mb-4">
            <span className="font-medium">Total</span>
            <span className="font-medium">KSH {total}</span>
          </div>
          <button className="w-full bg-red-700 text-white py-3 rounded-lg font-medium hover:bg-red-600 transition-colors">
            Continue Checkout
          </button>
        </div>

        {/* Customization Overlay */}
        {customizing && <CustomizationOverlay />}
      </div>
    </div>
  );
};

export default Orders;
