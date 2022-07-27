import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect, React } from 'react';

const Offer = () => {
    const { offerId } = useParams();

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        //Avec un tableau vide en deuxième argument
        // La fonction useEffect ne sera déclenchée qu'une fois fois, au chargement du composant
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://lereacteur-vinted-api.herokuapp.com/offer/${offerId}`);
                setData(response.data);
                // console.log(response.data);
                // J'exécute mon setIsLoading après avoir fait mon setData
                setIsLoading(false);
                console.log("test: " + response.data);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchData();
    }, [offerId]);

    console.log(offerId);
    return (<div className="page product">
        <p>Offer id : {offerId}</p>
        {isLoading === true ? (
            <h1>En cours de chargement</h1>
        ) : (
            <>
                <p>{data.product_description}</p>
                <h2>{data.product_details[0].MARQUE}</h2>
                {data.product_details.map((detail, index) => {
                    return <p>MAAAAAAAAAAAAAAAAAAAAAAA {detail.MARQUE}</p>;
                })}
            </>
        )}
    </div>);
};

export default Offer;
