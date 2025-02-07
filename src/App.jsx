import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Preorder from "./components/preorder/Preorder";
import Orders from "./components/preorder/components/pages/Orders";
// import Auth from "./components/auth/Auth/";
import Login from "./components/auth/components/Login";
import Register from "./components/auth/components/Register";
import Landing from "./components/landing/landing";
import Welcome from "./components/landing/components/Welcome";
import Home from "./components/landing/components/Home";
import Sidebar from "./components/landing/components/Sidebar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./fetures/userSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      dispatch(setUser(storedUser));
    }
  }, [dispatch]);
  return (
    <>
      <Router>
        <Routes>
          {/* home for the client */}
          <Route path="/" element={<Landing />}>
            <Route index element={<Welcome />} />
            <Route path="home" element={<Home />} />
            <Route path="sidebar" element={<Sidebar />} />
          </Route>
          {/* authentication */}
          <Route path="/auth" element={<Login />}>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          {/* preorder */}
          <Route path="/cart" element={<Preorder />}>
            <Route index element={<Orders />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
