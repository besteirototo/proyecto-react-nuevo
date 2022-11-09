import { Link } from 'react-router-dom';

const Menu = () => {
    const categorias = [
        { nombre: "Ficcion", ruta: "/category/ficcion", id: 0 },
        { nombre: "Sociologia", ruta: "/category/sociologia", id: 1 },
        { nombre: "Psicologia", ruta: "/category/psicologia", id: 2 },
    ];

    const styles = {
        ul: {
            display: "flex",
            listStyleType: "none",
            gap: "2em",
            padding: "0",
            margin: "0"
        },
        link: {
            textDecoration: "none",
            color: "#000000",
            fontWeight: "600"
        }
    }

    return (
        <ul style={styles.ul}>
            {
                categorias.map((categoria) => {
                    return <li key={categoria.id}><Link style={styles.link} to={categoria.ruta}>{categoria.nombre}</Link></li>
                })
            }
        </ul>
    );
}

export default Menu;