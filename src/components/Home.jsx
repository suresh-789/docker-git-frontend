import React from 'react';

const heroImg = '/hero-electronics.jpg';
const computersImg = '/computers-new.jpg';
const mobilesImg = '/mobiles-new.jpg';
const laptopsImg = '/laptops-new.jpg';
const pendrivesImg = '/pendrives-new.jpg';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div style={{
        width: '100%',
        height: '320px',
        background: `url(${heroImg}) center/cover no-repeat`,
        borderRadius: '18px',
        marginBottom: '32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        boxShadow: '0 4px 24px rgba(30,60,114,0.10)'
      }}>
        <div style={{
          background: 'rgba(30,60,114,0.7)',
          padding: '32px 48px',
          borderRadius: '14px',
          textAlign: 'center'
        }}>
          <h1 style={{fontSize: '2.5rem', marginBottom: '12px'}}>Welcome to E-Shop</h1>
          <p style={{fontSize: '1.2rem'}}>Discover the best deals on electronics, gadgets, and accessories!</p>
        </div>
      </div>

      {/* Featured Categories Grid */}
      <div className="product-grid">
        <div className="product-card">
          <img src="/computers-new.jpg" alt="Computers (public/computers-new.jpg)" />
          <h4>Computers</h4>
          <p>Top desktops and all-in-ones for work and play.</p>
        </div>
        <div className="product-card">
          <img src="/mobiles-new.jpg" alt="Mobiles (public/mobiles-new.jpg)" />
          <h4>Mobiles</h4>
          <p>Latest smartphones from leading brands.</p>
        </div>
        <div className="product-card">
          <img src="/laptops-new.jpg" alt="Laptops (public/laptops-new.jpg)" />
          <h4>Laptops</h4>
          <p>Powerful laptops for every need and budget.</p>
        </div>
        <div className="product-card">
          <img src="/pendrives-new.jpg" alt="Pendrives (public/pendrives-new.jpg)" />
          <h4>Pendrives</h4>
          <p>Fast and reliable storage solutions.</p>
        </div>
        <div className="product-card">
          <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80" alt="Headphones" />
          <h4>Headphones</h4>
          <p>High-quality sound for music and calls.</p>
        </div>
        <div className="product-card">
          <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80" alt="Keyboard" />
          <h4>Keyboard</h4>
          <p>Ergonomic and mechanical keyboards for productivity and gaming.</p>
        </div>
        <div className="product-card">
          <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80" alt="Mouse" />
          <h4>Mouse</h4>
          <p>Precision mice for work and play.</p>
        </div>
        <div className="product-card">
          <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Speaker" />
          <h4>Speaker</h4>
          <p>Wireless speakers for immersive sound.</p>
        </div>
        <div className="product-card">
          <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Monitor" />
          <h4>Monitor</h4>
          <p>High-resolution monitors for work and entertainment.</p>
        </div>
        <div className="product-card">
          <img src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=400&q=80" alt="Smartwatch" />
          <h4>Smartwatch</h4>
          <p>Track your fitness and stay connected.</p>
        </div>
        <div className="product-card">
          <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Camera" />
          <h4>Camera</h4>
          <p>Capture your moments in high definition.</p>
        </div>
        <div className="product-card">
          <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80" alt="Tablet" />
          <h4>Tablet</h4>
          <p>Portable and powerful for work and play.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;