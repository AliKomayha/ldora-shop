import { useState, useEffect } from "react";
import ProductCard from "../components/productCard";
import "../styles/products.css";

function Products({ products }) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("none");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    let filteredList = products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );

    if (sort === "low") {
      filteredList.sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
      filteredList.sort((a, b) => b.price - a.price);
    }

    setFiltered(filteredList);
  }, [search, sort, products]);

  return (
    <div className="products-page">
      <h2>All Products</h2>

      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setSort(e.target.value)} value={sort}>
          <option value="none">Sort by Price</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>

      <div className="product-grid">
        {filtered.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
