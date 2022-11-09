import { Card, CardActions, CardContent, CardMedia, Button, Typography, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {

    const styles = {
        card: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRadius: "0.5em",
            alignItems: "center",
            maxWidth: "12em",
            margin: "0.5em"
        },
        image: {
            width: "100%",
            height: "100%",
            objectFit: "cover"
        }
    }

    return (
        <Card style={styles.card}>
            <CardActionArea>
                <Link to={`/item/${product.id}`}><CardMedia style={styles.image} component="img" image={product.image} alt={product.title} /></Link>
                <CardContent>
                    <Typography variant="subtitle2">{product.title}</Typography>
                    <Typography variant="h5" component="div">${product.price}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link to={`/item/${product.id}`}><Button size="small">Ver Más</Button></Link>
            </CardActions>
        </Card>
    );
}

export default Item;