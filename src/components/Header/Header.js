import React from 'react';
import { Link, useNavigate } from "react-router-dom";

import "./style.css";

const Header = ({ token, setUser }) => {
    const navigate = useNavigate();
    return (
        <header className="header-component ">
            <p>My Header</p>
            {token === null ? (
                <>
                    <Link to="/signup">S'inscrire</Link>
                    <br />
                    <Link to="/login">Se connecter</Link>{" "}
                </>
            ) : (
                <button
                    onClick={() => {
                        setUser(null);
                        navigate("/");
                    }}
                >
                    Se déconnecter
                </button>
            )}

            <br />
            <Link to="/publish">Vends tes articles</Link>
        </header>
    );
};

export default Header;
