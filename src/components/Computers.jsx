import React from "react";
import "./style.css";

const computerProducts = [
  {
    id: 1,
    name: "Dell Inspiron 15",
    price: 650,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
    brand: "Dell"
  },
  {
    id: 2,
    name: "HP Pavilion x360",
    price: 720,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    brand: "HP"
  },
  {
    id: 3,
    name: "Lenovo ThinkPad E14",
    price: 800,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    brand: "Lenovo"
  },
  {
    id: 4,
    name: "Apple iMac 24\"",
    price: 1299,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
    brand: "Apple"
  },
  {
    id: 5,
    name: "Acer Aspire 5",
    price: 550,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    brand: "Acer"
  }
];

const Computers = () => {
  return (
    <div className="product-container">
      <h2 style={{ fontSize: '2rem', color: '#1e3c72', marginBottom: '18px' }}>Computers</h2>
      <div className="product-grid">
        {computerProducts.map((product) => (
          <div key={product.id} className="product-card" style={{ boxShadow: '0 2px 12px rgba(30,60,114,0.08)', border: 'none', background: '#fff', borderRadius: '12px', transition: 'transform 0.2s', cursor: 'pointer' }}>
            <img src={product.image} alt={product.name} style={{ borderRadius: '8px', height: '160px', objectFit: 'cover', marginBottom: '10px' }} />
            <h4 style={{ color: '#2a5298', fontWeight: 600 }}>{product.name}</h4>
            <p style={{ color: '#888', fontSize: '0.95rem', margin: '4px 0' }}>{product.brand}</p>
            <p style={{ color: '#444', fontSize: '1.1rem', margin: '8px 0' }}>${product.price.toFixed(2)}</p>
            <button style={{ background: 'linear-gradient(90deg, #1e3c72 0%, #2a5298 100%)', color: '#fff', border: 'none', borderRadius: '6px', padding: '10px 18px', fontWeight: 500, fontSize: '1rem', cursor: 'pointer', marginTop: '8px' }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Computers;
