import { createContext, useState } from "react";

export const Context = createContext();

const CustomProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [total, setTotal] = useState(0);

    const addProduct = (product, cantidad) => {
        if (isInCart(product.id)) {
            const newCart = cart.map(item => {
                if (item.id === product.id) {
                product.cantidad += cantidad;
            } 
                return product;
            });
            setCart(newCart);
        } else {
            setCart([...cart, { ...product, cantidad }]);
        }
        setQuantity(quantity + cantidad);
        setTotal(total + product.price * cantidad);
    }

    const removeProduct = (id) => { 
        const found = cart.find(item => item.id === id);
        setCart(cart.filter(product => product.id !== id)); 
        setQuantity(quantity - found.cantidad);
        setTotal(total - (found.price * found.cantidad));
    }

    const clearCart = () => { 
        setCart([]); 
        setQuantity(0);
        setTotal(0);
    }

    const isInCart = (id) => cart.some(product => product.id === id);

    return (
        <Context.Provider value={{ cart, quantity, total, addProduct, removeProduct, clearCart, isInCart }}>
            {children}
        </Context.Provider>
    )
}

export default CustomProvider;