import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    try {
      event.preventDefault();

      //Je viens reset le message d'erreur à chaque tentative
      setErrorMessage("");

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      if (response.data) {
        console.log("J'ai bien réussi à me connecter");
        console.log(response.data.token);
        setUser(response.data.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      if (error.response.data.message === "User not found") {
        setErrorMessage("Identifiants incorrects");
      }
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className='position-relative'>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleChangeEmail} />
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Mot de passe"
              value={password}
              onChange={handleChangePassword} />
          </div>
          <input type="submit" value="Se connecter" />
          <p style={{ color: "red" }}>{errorMessage}</p>

        </div>
      </form>
    </>
  );
};

export default Login;
