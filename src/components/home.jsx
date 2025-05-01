import { useState, useEffect } from "react";
import Navbar from "./navbar.jsx";
import { Grid } from "@mui/material";
import ProductCard from "./productCard.jsx";
import '../styles/home.css';


const getCurrentDimension = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
});

function Home() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [menuOpen, setMenuOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const featuredProducts = products.filter(p => p.featured === "yes").slice(0, 4);

  //screen dimentions 
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, []);

  //fetching data from google sheet
  useEffect(() => {
    fetch("https://opensheet.elk.sh/1FQii1XYdz8mko1tv-12SkE6DftqR_MGm5QWXj--kRN8/Sheet1")
      .then(res => res.json())
      .then(data => {
        // Optional: convert price to number
        const formatted = data.map(p => ({ ...p, price: parseFloat(p.price) }));
        setProducts(formatted);
      });
  }, []);

  return (
    <>
    <Navbar screenSize={screenSize} />

    <div style={{ marginTop: '80px', padding: '1rem' }}>
      <h1 className="main-title">Our Products</h1>
      
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center">
        {featuredProducts.map((product, index) => (
          <Grid item key={index} 
            // sx={{
            //     gridColumn: { xs: "span 12", sm: "span 6", md: "span 4" },
            // }}>
            xs={4} // 1 card full width in mobile
            sm={4} // 2 cards per row on tablet
            md={3} // 4 cards per row on desktop (12 / 3 = 4 columns)
            display="flex"
            justifyContent="center"
            >
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
    </>
  );
}

export default Home;
