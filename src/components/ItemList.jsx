import Item from './Item';

const ItemList = ({products}) => {

    const styles = {
        container: {
            display: "flex",
            justifyContent: "space-between",
            padding: "3em 10em",
            alignItems: "center",
            flexWrap: "wrap",
            backgroundColor: "#d6d6d6"
        }
    }

    return (
        <div style={styles.container}>
            {
                products.map(product =>  
                <Item key={product.id} product={product} /> 
            )}
        </div>
    )
}

export default ItemList;