import { useState } from "react";

const ItemCount = (props) => {
    const { stock, initial, onAdd } = props;
    const [count, setCount] = useState(initial);

    const addButton = () => { return count < stock ? setCount(count + 1) : null };

    const removeButton = () => { return count > 1 ? setCount(count - 1) : null };

    const styles = {
        container: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "1em",
        },
        containerContent: {
            display: "flex",
            backgroundColor: "#000000",
        },
        button: {
            padding: "0.7em",
            fontSize: "1em",
            color: "#ffffff",
            backgroundColor: "#000000",
            cursor: "pointer",
            borderRadius: "0.5em",
        },
        span: {
            fontSize: "1em",
            padding: "0.7em",
            backgroundColor: "#000000",
            color: "#ffffff"
        }
    }

    return (
        <div style={styles.container}>
            <div style={styles.containerContent}>
                <button style={styles.button} onClick={addButton}>+</button>
                <span style={styles.span}>{count}</span>
                <button style={styles.button} onClick={removeButton}>-</button>
            </div>
            <button style={styles.button} disabled={stock === 0} onClick={()=> onAdd(count)}>Comprar</button>
        </div>
    );
}

export default ItemCount;