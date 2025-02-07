/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaBars, FaHeart, FaSearch, FaShoppingCart } from "react-icons/fa";
import { useState, useEffect } from "react";
import burger from "../../../assets/burger 1.png";
import { useNavigate } from "react-router-dom";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [cartCount, setCartCount] = useState(cart.length);
  const navigate = useNavigate();
  const [showAddedToCart, setShowAddedToCart] = useState(false);
  const [addedFood, setAddedFood] = useState(null);
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredFoods, setFilteredFoods] = useState([]);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTczODkzNzEzMiwianRpIjoiMmJiNDQ0NzItYWI4My00ZGQ1LTk5ODgtNTNlYTEyMmMyMjllIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNzM4OTM3MTMyLCJleHAiOjE3Mzg5NDA3MzJ9.ixE1yL9dM9ouqc78IsxaN3s9oekiRcBWq5LUoggaOpc";
  const apiUrl = "https://robo-dine-python-project.onrender.com/recipes";

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await fetch(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setFoods(data.recipes);
        if (!loading && !error) {
          setFilteredFoods(data.recipes);
        }
      } catch (err) {
        setError(err);
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, [loading, error, foods]); // Empty dependency array ensures this runs only once on mount
  useEffect(() => {
    // Filter the foods based on the search term
    const filterFoods = () => {
      if (searchTerm) {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const filtered = foods.filter(
          (food) => food.name.toLowerCase().includes(lowerCaseSearchTerm) // Assuming 'name' is the property to search
        );
        setFilteredFoods(filtered);
      } else {
        setFilteredFoods(foods); // Show all foods if search term is empty
      }
    };

    filterFoods(); // Call the filter function
  }, [searchTerm, foods]); // Re-run filter when searchTerm or foods change

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart)); // Save to local storage
    setCartCount(cart.length); // Update cart count
  }, [cart]);
  const handleAddToCart = (food, quantity) => {
    if (quantity <= 0) return;

    const itemToAdd = {
      // Create a new object for the cart item
      id: food.id,
      name: food.name || food.title, // Use name or title if name is not available
      price: food.price,
      image: food.image,
      quantity: quantity, // Add quantity directly here
    };

    const itemInCart = cart.find((item) => item.id === itemToAdd.id);

    if (itemInCart) {
      setCart(
        cart.map((item) =>
          item.id === itemToAdd.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, itemToAdd]); // Add the new item object
    }

    setShowAddedToCart(true);
    setAddedFood(food);

    setTimeout(() => {
      setShowAddedToCart(false);
      setAddedFood(null);
    }, 1000);
  };

  const handleSideBar = () => {
    navigate("/sidebar");
    setMenuOpen(!menuOpen);
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  if (loading) {
    return <div className="text-center py-4">Loading meals...</div>; // Or a more sophisticated loading indicator
  }

  if (error) {
    return (
      <div className="text-center py-4 text-red-500">
        Error: Could not load meals.
      </div>
    );
  }

  return (
    // ... rest of your component code (JSX) - No changes needed here

    <div className="min-h-screen bg-gray-100">
      {/* ... header, search section */}
      <header className="bg-red-700 text-white px-4 py-4 flex justify-between items-center fixed top-0 w-full z-50">
        <div className="flex items-center space-x-4">
          <button
            className="text-white text-2xl"
            onClick={() => handleSideBar()}
          >
            <FaBars />
          </button>
          <h1 className="text-xl font-bold">A Meal for a Champion</h1>
        </div>
        <div className="flex items-center space-x-6">
          {/* Cart icon with item count */}
          <div className="relative">
            <button className="text-white text-2xl" onClick={handleCartClick}>
              <FaShoppingCart />

              {
                <span className="absolute top-0 left-5  bg-blue-700 text-white text-xs font-semibold rounded-full px-2 py-1">
                  {cartCount}
                </span>
              }
            </button>
          </div>
          {/* User avatar */}
          <div className="w-10 h-10 bg-white rounded-full overflow-hidden">
            <img
              src={burger}
              alt="User Avatar"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </header>
      <main className="px-6 py-8 mt-15">
        {/* ... Search Section */}
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search for meals..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 pl-10 bg-white rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <FaSearch className="absolute top-3 left-3 text-gray-500" />
        </div>
        {/* Popular Section */}
        <section className="mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filteredFoods.map((food) => (
              <FoodCard
                key={food.id}
                food={food}
                handleAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </section>
      </main>
      {/* ... Added to Cart Overlay */}
      {showAddedToCart && addedFood && (
        <div className="fixed top-0 left-0 w-full h-full bg-red bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <IoCheckmarkDoneCircle
              style={{ color: "green", fontSize: "50px" }}
            />
            <p className="text-lg font-semibold">
              {addedFood.title} added to cart!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const FoodCard = ({ food, handleAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all">
      <img
        src={food.image}
        alt={food.name}
        className="w-full h-40 object-cover rounded-lg mb-2"
      />
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">{food.name}</h3>
        <FaHeart className="text-red-700" />
      </div>
      <p className="text-sm text-gray-500 mb-2">Ksh.{food.price.toFixed(2)}</p>

      {/* Quantity and Add to Cart */}
      <div className="flex items-center justify-center mt-2">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            className="bg-gray-300 px-2 py-1 rounded"
          >
            -
          </button>
          <span className="px-2">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="bg-gray-300 px-2 py-1 rounded"
          >
            +
          </button>
        </div>
      </div>

      <button
        onClick={() => handleAddToCart(food, quantity)}
        className="w-full bg-red-700 text-white px-4 py-2 rounded-xl hover:bg-red-500 mt-3"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Home;
