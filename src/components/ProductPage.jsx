import React, { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { addToCart } from "../services/cartService";
import "./style.css";

const ProductPage = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts(category || "");
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [category]);

  const handleAddToCart = async (product) => {
    try {
      await addToCart(product.id);
      alert("Product added to cart successfully!");
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <div className="product-container">
      <h2 style={{ fontSize: '2rem', color: '#1e3c72', marginBottom: '18px' }}>
        {category ? category.charAt(0).toUpperCase() + category.slice(1) : "All Products"}
      </h2>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card" style={{ boxShadow: '0 2px 12px rgba(30,60,114,0.08)', border: 'none', background: '#fff', borderRadius: '12px', transition: 'transform 0.2s', cursor: 'pointer' }}>
              <img src={`http://localhost:8080/api/products/images/${product.imagePath}`} alt={product.name} style={{ borderRadius: '8px', height: '160px', objectFit: 'cover', marginBottom: '10px' }} />
              <h3 style={{ color: '#2a5298', fontWeight: 600 }}>{product.name}</h3>
              <p style={{ color: '#444', fontSize: '1.1rem', margin: '8px 0' }}>Price: <span style={{ color: '#28a745', fontWeight: 700 }}>${product.price}</span></p>
              <button style={{ background: 'linear-gradient(90deg, #1e3c72 0%, #2a5298 100%)', color: '#fff', border: 'none', borderRadius: '6px', padding: '10px 18px', fontWeight: 500, fontSize: '1rem', cursor: 'pointer', marginTop: '8px' }} onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No products available in this category.</p>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
