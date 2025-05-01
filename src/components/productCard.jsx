import { Card, CardContent, CardMedia, Typography, Button, CardActions } from "@mui/material";
import '../styles/home.css'

function ProductCard({ product }) {
  return (
    <Card  sx={{ 
        //maxWidth: 345,
        width: 260,
        height: 400,
        margin: "auto",
        backgroundColor: "#ffffff",
        border: "1px solid #E59A59",
        boxShadow: "0 4px 8px rgba(112, 46, 30, 0.2)",
        transition: "transform 0.3s ease",
        '&:hover': {
          transform: 'scale(1.03)'
        }}}>

      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" sx={{ color: "#712E1E" }}>
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ color: "#888870" }} >
          {product.description}
        </Typography>
        <Typography variant="subtitle1" color="primary" sx={{ color: "#712E1E", marginTop: 1 }}>
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className="buy-button" size="small" variant="contained"  sx={{
            backgroundColor: "#E59A59",
            color: "#ffffff",
            '&:hover': { backgroundColor: "#d07e42" }
          }} >Buy Now</Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
