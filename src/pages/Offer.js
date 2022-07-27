import { useParams } from "react-router-dom";

const Offer = () => {
    const { offerId, offerName } = useParams();
    console.log(offerId);
    return <div className="page product">Offer id : {offerId} {offerName}</div>;
};

export default Offer;
