import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {

    const styles = {
        footer: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.5em 7em",
            borderTop: "4px solid",
            borderImage: "linear-gradient(to left, #2D388A, #00AEEF) 1",
        },
        image: {
            maxWidth: "20em",
        },
        social: {
            display: "flex",
            gap: "1em",
        },
        span: {
            fontSize: "0.7em",
        }
    }

    return (
        <footer style={styles.footer}>
            <Link to="/"><img style={styles.image} src='https://firebasestorage.googleapis.com/v0/b/react-17563.appspot.com/o/Group%201.png?alt=media&token=0545d4af-0745-4975-8e24-38f50665c95d' alt="" /></Link>
            <div>
                <p>Editorial independiente de pensamiento crítico. Libros para interrogar el presente.</p>
                <span style={styles.span}>© Saeta de Fuego Editores Argentina 2022 · Todos los derechos reservados</span>
            </div>
            <div style={styles.social}>
                <FacebookIcon fontSize="large" />
                <InstagramIcon fontSize="large" />
                <TwitterIcon fontSize="large" />
            </div>
        </footer>
    );
}

export default Footer;