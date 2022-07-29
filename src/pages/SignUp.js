import { useState } from 'react';
import axios from "axios";

export default function SignUp() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newsletter, setNewsLetter] = useState(false);

    const [errorMessage, setErrorMessage] = useState("");

    const handleChangeUsername = (event) => {
        setUsername(event.target.value);
    };

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleChangeNewsLetter = (event) => {
        setNewsLetter(event.target.checked);
    };

    const handleSignup = async (event) => {
        try {
            event.preventDefault();

            //Je viens reset le message d'erreur à chaque tentative
            setErrorMessage("");

            const response = await axios.post("https://lereacteur-vinted-api.herokuapp.com/user/signup", {
                username: username,
                email: email,
                password: password,
                newsletter: newsletter
            });
            console.log(response.data);
            alert("Merci pour votre message");

        } catch (error) {
            console.log(error.message);
            if (error.response.status === 409) {
                setErrorMessage("Cet email a déjà un compte ! ");
            }
        }
    };

    return (
        <>
            <h1>SignUp</h1>
            <form onSubmit={handleSignup}>
                <div className='position-relative'>
                    <div>
                        <input type="text"
                            id="username"
                            name="username"
                            placeholder="Nom d'utilisateur"
                            value={username}
                            onChange={handleChangeUsername} />
                    </div>
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
                    <div>
                        <input
                            type="checkbox"
                            id="newsletter"
                            name="newsletter"
                            value={newsletter}
                            onChange={handleChangeNewsLetter} />
                        <label htmlFor="newsletter">S'inscrire à la newsletter</label>
                    </div>
                    <input type="submit" value="S'inscrire" />
                    <p style={{ color: "red" }}>{errorMessage}</p>

                </div>
            </form>
        </>
    );
}
