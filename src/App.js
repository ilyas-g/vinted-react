// src/App.js
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Offer from "./pages/Offer";
import SignUp from "./pages/SignUp";

import Cookies from "js-cookie";

// JSON différent de form-data -> content type

function App() {
  const [token, setToken] = useState(Cookies.get("userToken") || null);

  const setUser = (tokenToCheck) => {
    if (tokenToCheck !== null) {
      //Action de connexion
      console.log("Création d'un cookie userToken");
      Cookies.set("userToken", tokenToCheck, { expires: 10 });
    } else {
      //action de déconnexion
      console.log("Suppression d'un cookie userTOken");
      Cookies.remove("userToken");
    }
    setToken(tokenToCheck);
  };

  return (
    <Router>
      <Header token={token} setUser={setUser} />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:offerId" element={<Offer />} />
        <Route path="/signup" element={<SignUp />} setUser={setUser} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
