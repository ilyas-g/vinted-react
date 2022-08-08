import { useState, useEffect, React } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home() {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        //Avec un tableau vide en deuxième argument
        // La fonction useEffect ne sera déclenchée qu'une fois fois, au chargement du composant
        const fetchData = async () => {
            try {
                const response = await axios.get("https://lereacteur-vinted-api.herokuapp.com/offers");
                setData(response.data);
                // console.log(response.data);
                // J'exécute mon setIsLoading après avoir fait mon setData
                setIsLoading(false);
                console.log(response.data);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Home</h1>
            {isLoading === true ? (
                <h1>En cours de chargement</h1>
            ) : (
                <>
                    <div className="container content-grid">
                        {data.offers.map((offer, index) => {
                            return (
                                <div className="col" key={index}>
                                    {/* <img src={offer.product_pictures[0].secure_url} alt={offer.product_name} /> */}
                                    <img src={offer.product_image.secure_url} alt="" />
                                    <p><Link to={`/offer/${offer._id}`}>{offer.product_name}</Link></p>
                                </div>
                            );
                        })}
                    </div>

                </>
            )}
        </div>
    );
}
