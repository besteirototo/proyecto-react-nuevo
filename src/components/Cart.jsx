import { useContext } from "react";
import { Context } from "../context/customContext";
import swal from 'sweetalert';

const Cart = () => {
    const { cart, total, clearCart } = useContext(Context);

    const styles = {
        container: {
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#d6d6d6",
            padding: "10em",
        },
        table: {
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#ffffff",
            borderRadius: "0.5em",
            padding: "5em 10em",  
        },
        head: {
            borderBottom: "1px solid #000000",
        },
        trHead: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        },
        image: {
            width: "10em",
            height: "15em",
            borderRadius: "0.5em",
        },
        trBody: {
            display: "flex",
            padding: "1em 0em",
            gap: "2em",
        },
        td: {
            display: "flex",
            flexDirection: "column",
            gap: "0.3em",
        },
        tdFoot: {
            display: "flex",
            alignItems: "center",
            gap: "1em",
        },
        title: {
            fontSize: "1.5em",
        },
        p: {
            fontSize: "0.8em",
        },
        price: {
            fontSize: "1.2em",
            fontWeight: "bold",
        },
        puchaseBtn: {
            backgroundColor: "#1b5e20",
            padding: "0.7em",
            maxWidth: "10em",
            fontSize: "0.8em",
            border: "none",
            borderRadius: "0.5em",
            color: "#ffffff",
            cursor: "pointer",
        },
        clearBtn: {
            backgroundColor: "#d50000",
            padding: "0.7em",
            maxWidth: "10em",
            fontSize: "0.8em",
            border: "none",
            borderRadius: "0.5em",
            color: "#ffffff",
            cursor: "pointer",
        }
    }

    return (
        <div style={styles.container}>
            {cart.length === 0 ? (
                <div style={styles.table}>
                    <h1>No agregaste productos al carro</h1>
                </div>
            ) : (
            <table style={styles.table}>
                <thead style={styles.head}>
                    <tr style={styles.trHead}>
                        <th>
                            <p>Producto</p>
                        </th>
                        <th>
                            <p>Total</p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(product => (
                        <tr style={styles.trBody}>
                            <td><img style={styles.image} src={product.image} alt="" /></td>
                            <td style={styles.td}>
                                <h2 style={styles.title}>{product.title}</h2>
                                <p style={styles.price}>${product.price} | Cantidad: {product.cantidad}</p>
                                <p style={styles.p}>{product.description}</p>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr style={styles.trHead}>
                        <td style={styles.tdFoot}>
                            <button style={styles.puchaseBtn} onClick={()=> swal("Compra realizada", "¡Su compra ha sido realizada con éxito!", "success")}>Finalizar Compra</button>
                            <button style={styles.clearBtn} onClick={clearCart}>Limpiar carrito</button>
                        </td>
                        <td>
                            <p>Total: <span style={styles.price}>${total}</span></p>
                        </td>
                    </tr>
                </tfoot>
            </table>
            )}
        </div>
    );
}

export default Cart;