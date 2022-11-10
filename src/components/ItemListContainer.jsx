import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from '../firebase/firebase';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    const productsCollection = collection(db, 'products');
    const productsCollectionCategory = id ? query(productsCollection, where('category', '==', id )) : productsCollection;

    useEffect(() => {
        getDocs(id ? productsCollectionCategory : productsCollection)
        .then(res => { setProducts(res.docs.map(item => { return { ...item.data(), id: item.id } }))})
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [id]);

    return ( 
        <>
            { loading ? <ClipLoader color="#36d7b7" size={100}/> : <ItemList products={products} /> }
        </>
    );
}

export default ItemListContainer;