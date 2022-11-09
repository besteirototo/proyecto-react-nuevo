import { useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Context } from '../context/customContext';

const CartWidget = () => {
    const { quantity } = useContext(Context);

    const styles = {
        color: {
            color: "#000000",
        },
        div: {
            display: "flex",
        }
    }

    return (
        <div style={styles.div}>
            <ShoppingCartIcon style={styles.color} />
            <span style={styles.color}>{quantity}</span>
        </div>
    );
}

export default CartWidget;