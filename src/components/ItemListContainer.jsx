import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    const productsDatabase = getFirestore();
    const productsCollection = collection(productsDatabase, 'products');
    const productsCollectionCategory = query(productsCollection, where('category', '==', id ))

    useEffect(() => {
        if (id) {
            getDocs(productsCollectionCategory)
            .then(res => setProducts(res.docs.map(product => ({ id: product.id, ...product.data() }))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
        }
        else {
            getDocs(productsCollection)
            .then(res => setProducts(res.docs.map(product => ({ id: product.id, ...product.data() }))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
        }
    }, [id]);

    return ( 
        <>
            { loading ? <ClipLoader color="#36d7b7" size={100}/> : <ItemList products={products} /> }
        </>
    );
}

export default ItemListContainer;