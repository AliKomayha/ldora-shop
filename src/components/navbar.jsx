import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

function Navbar({ screenSize }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {screenSize.width > 750 && (
        <AppBar position="fixed" sx={{ backgroundColor: '#6D2323' }}>
            <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1, color: '#E5D0AC' }}>
                Skincare Shop
            </Typography>
            <Typography component={Link} to="/" variant="button" sx={{ marginRight: 2, color: '#E5D0AC' }}>
                Home
            </Typography>
            <Typography component={Link} to="/products" variant="button" sx={{ marginRight: 2, color: '#E5D0AC' }}>
                Products
            </Typography>
            <Typography variant="button" sx={{ color: '#E5D0AC' }}>
                Contact
            </Typography>
            </Toolbar>
        </AppBar>
        )}
    
      
      {screenSize.width <= 750 && (
        <>
          <AppBar position="fixed" sx={{ backgroundColor: '#712E1E' }}>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={() => setMenuOpen(true)}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Skincare Shop
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer anchor="left" open={menuOpen} onClose={() => setMenuOpen(false)}>
            <List sx={{ width: 250 }}>
              <ListItem button component={Link} to="/" ><ListItemText primary="Home" /></ListItem>
              <ListItem button component={Link} to="/products" ><ListItemText primary="Products" /></ListItem>
              <ListItem button><ListItemText primary="Contact" /></ListItem>
            </List>
          </Drawer>
        </>
      )}
    </>
  );
}

export default Navbar;
