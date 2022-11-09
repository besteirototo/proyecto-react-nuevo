import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from "react-router-dom";
import { getDoc, collection, doc } from "firebase/firestore";
import { db } from '../firebase/firebase';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const productsCollection = collection(db, 'products');
        const productDoc = doc(productsCollection, id);

        getDoc(productDoc)
        .then(res => {
            setProduct({
                ...res.data(),
                id: res.id
            });
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false));
    }, []);

    return (
        <>
            {
                loading ? <ClipLoader color="#36d7b7"/> : <ItemDetail product={product} />
            }

        </>
    );
}

export default ItemDetailContainer;