import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { useState, useContext } from 'react';
import { Context } from '../context/customContext';

const ItemDetail = ({ product }) => {
    const [buttonPress, setButtonPress] = useState(false);
    const { cart, addProduct, isInCart } = useContext(Context);

    let stock = 0;
    if (isInCart(product.id)) {
        const found = cart.find(item => item.id === product.id);
        stock = product.stock - found.cantidad;
    } else {
        stock = product.stock;
    }

    const onAdd = (count) => {
        setButtonPress(true);
        addProduct(product, count);
    }

    const styles = {
        container: {
            backgroundColor: "#d6d6d6",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "3em"
        },
        content: {
            backgroundColor: "#ffffff",
            margin: "0em 10em",
            padding: "2em",
            borderRadius: "1em",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "5em"
        },
        image: {
            width: "30em",
            height: "30em",
        },
        detail: {
            display: "flex",
            flexDirection: "column",
            gap: "0.5em",
        },
        button: {
            maxWidth: "11em",
            padding: "0.7em",
            marginTop: "1em",
            backgroundColor: "#000000",
            color: "#ffffff",
            borderRadius: "0.5em",
            fontSize: "1em"
        },
        link: {
            textDecoration: "none",
            color: "#ffffff"
        }
    }

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <img style={styles.image} src={product.image} alt={product.title} />
                <div style={styles.detail}>
                    <h3>{product.title}</h3>
                    <h2>${product.price}</h2>
                    <span>{product.description}</span>
                    {
                        !buttonPress ? <ItemCount initial={1} stock={stock} onAdd={onAdd} /> : <button style={styles.button}><Link style={styles.link} to='/cart'>Terminar compra</Link></button>
                    }
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;