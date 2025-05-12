import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import Home from './components/home.jsx'
import Products from './components/products.jsx'

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://opensheet.elk.sh/1FQii1XYdz8mko1tv-12SkE6DftqR_MGm5QWXj--kRN8/Sheet1")
      .then(res => res.json())
      .then(data => {
        const formatted = data.map(p => ({ ...p, price: parseFloat(p.price) }));
        setProducts(formatted);
      });
  }, []);



  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products products={products} />} />  
    </Routes>
    </BrowserRouter>
  );

}

export default App
