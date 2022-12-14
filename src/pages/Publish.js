import axios from "axios";
import { useState, React } from 'react';
import { useNavigate, useParams, Navigate } from "react-router-dom";

export default function Publish({ token }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [brand, setBrand] = useState("");
    const [size, setSize] = useState("");
    const [color, setColor] = useState("");
    const [condition, setCondition] = useState("");
    const [city, setCity] = useState("");
    const [price, setPrice] = useState("");
    const [exchange, setExchange] = useState(false);

    const [preview, setPreview] = useState(null);

    const [file, setFile] = useState({});

    const navigate = useNavigate();
    const { offerId } = useParams();

    const handleSaleArticle = async (event) => {
        try {
            event.preventDefault();

            const formData = new FormData();
            formData.append("title", title);
            formData.append("description", description);
            formData.append("price", price);
            formData.append("condition", condition);
            formData.append("city", city);
            formData.append("brand", brand);
            formData.append("size", size);
            formData.append("color", color);
            formData.append("files", file);

            const response = await axios.post("https://lereacteur-vinted-api.herokuapp.com/offer/publish",
                formData,
                {
                    headers: {
                        Authorization: "Bearer " + token,
                        "Content-Type": "multipart/form-data"
                    }
                });
            alert(JSON.stringify(response.data));
            console.log(response.data);
            navigate(`/offer/${offerId}`);

        } catch (error) {
            if (error.response.status === 500) {
                console.error("An error occurred");
            } else {
                console.error(error.response.data.msg);
            }
        }
    };

    return (
        token ?
            <form onSubmit={handleSaleArticle}>
                <div>
                    <div>
                        <label>Image</label>
                        <input
                            type="file"
                            onChange={(event) => {
                                setFile(event.target.files[0]);
                                setPreview(URL.createObjectURL(event.target.files[0]));
                            }}
                        />
                        <img src={preview} style={{ width: "200px" }} alt="" />
                    </div>
                    <div>
                        <label>Titre</label>
                        <input
                            type="text"
                            value={title}
                            placeholder="ex: Chemise S??zane verte"
                            onChange={(event) => setTitle(event.target.value)}
                        />
                    </div>
                    <div>
                        <label>D??cris ton article</label>
                        <input
                            type="text"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <label>Marque</label>
                        <input
                            type="text"
                            value={brand}
                            onChange={(event) => setBrand(event.target.value)}
                        />
                    </div>
                    <div>
                        <label>Taille</label>
                        <input
                            type="text"
                            value={size}
                            onChange={(event) => setSize(event.target.value)}
                        />
                    </div>
                    <div>
                        <label>Couleur</label>
                        <input
                            type="text"
                            value={color}
                            onChange={(event) => setColor(event.target.value)}
                        />
                    </div>
                    <div>
                        <label>Condition</label>
                        <input
                            type="text"
                            value={condition}
                            onChange={(event) => setCondition(event.target.value)}
                        />
                    </div>
                    <div>
                        <label>Lieu</label>
                        <input
                            type="text"
                            value={city}
                            onChange={(event) => setCity(event.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <label>Prix</label>
                        <input
                            type="text"
                            value={price}
                            onChange={(event) => setPrice(event.target.value)}
                        />
                    </div>

                    <div>
                        <input
                            type="checkbox"
                            value={exchange}
                            onChange={(event) => setExchange(event.target.checked)}
                        />
                        <label>Je suis int??ress??(e) par les ??changes</label>
                    </div>
                </div>
            </form>
            : <Navigate to="/login" />
    );
}
