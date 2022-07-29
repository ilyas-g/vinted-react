// src/App.js
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Offer from "./pages/Offer";
import SignUp from "./pages/SignUp";

function App() {

  const setUser = () => {
    console.log("setUser function active!");
  };
  return (
    <Router>
      {/* <Header /> */}
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
