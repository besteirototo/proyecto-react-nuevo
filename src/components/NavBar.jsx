import CartWidget from './CartWidget';
import Menu from './Menu';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const styles = {
        header: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#ffffff",
            borderBottom: "4px solid",
            borderImage: "linear-gradient(to right, #2D388A, #00AEEF) 1",
            padding: "0em 7em"
        },
        input: {
            padding: "0.7em",
            borderRadius: "0.5em",
            border: "1.5px solid #000000",
            minWidth: "25em"
        },
        images: {
            maxWidth: "12em",
            height: "100%"
        },
        link: {
            height: "1.5em",
            width: "1.5em",
        }
    }

    return (
        <header style={styles.header}>
            <Link to="/"><img style={styles.images} src='https://firebasestorage.googleapis.com/v0/b/react-17563.appspot.com/o/Group%201.png?alt=media&token=0545d4af-0745-4975-8e24-38f50665c95d' alt="" /></Link>
            <input style={styles.input} type="search" placeholder="Buscar libros, autores y más..." />
            <nav>
                <Menu />
            </nav>
            <Link style={styles.link} to='/cart'><CartWidget /></Link>
        </header>
    );
}

export default NavBar;