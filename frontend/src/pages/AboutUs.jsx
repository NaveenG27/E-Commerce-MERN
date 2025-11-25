import React from 'react'

const AboutUs = () => {
  return (
    <div>
      <div className="about-us-container">
      
      
      <header className="about-hero">
        <h1>About E-Shopee: Your World of Shopping, Simplified 🛍️</h1>
        <p className="mission-statement">
          E-Shopee was founded on a simple belief: **online shopping should be easy, reliable, and rewarding.** We connect quality sellers with savvy buyers, making smart living accessible to everyone.
        </p>
      </header>
      
      <hr />

      
      <section className="about-section differences-section">
        <h2>The E-Shopee Difference: Why Shop With Us?</h2>
        <div className="difference-cards">
          
          <div className="difference-card">
            <i className="fas fa-box-open icon"></i>
            <h3>Quality & Variety</h3>
            <p>We hand-select our sellers and curate our collections to ensure you only find **high-quality, trending, and essential products.**</p>
          </div>

          <div className="difference-card">
            <i className="fas fa-shield-alt icon"></i>
            <h3>Unbeatable Security</h3>
            <p>Your safety is our priority. We use **industry-leading encryption** to protect your data and secure every transaction.</p>
          </div>

          <div className="difference-card">
            <i className="fas fa-headset icon"></i>
            <h3>Real Customer Care</h3>
            <p>Our friendly, human support team is ready to help with hassle-free returns, exchanges, and inquiries.</p>
          </div>

          <div className="difference-card">
            <i className="fas fa-shipping-fast icon"></i>
            <h3>Fast & Reliable Delivery</h3>
            <p>We partner with the best logistics networks to ensure your order moves quickly and arrives securely right to your door.</p>
          </div>
          
        </div>
      </section>

      <hr />

      
      <section className="about-section promise-section">
        <h2>Our Promise to You</h2>
        <table className="promise-table">
          <thead>
            <tr>
              <th>What We Promise</th>
              <th>How We Deliver</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>**Transparency**</td>
              <td>Clear pricing, honest product descriptions, and visible customer ratings.</td>
            </tr>
            <tr>
              <td>**Accessibility**</td>
              <td>A seamless, easy-to-use experience on any device—mobile, tablet, or desktop.</td>
            </tr>
            <tr>
              <td>**Satisfaction**</td>
              <td>A simple, straightforward return and exchange policy. Your happiness is guaranteed.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <hr />

    
      <footer className="about-footer">
        <h2>Ready to Simplify Your Shopping?</h2>
        <p>Thank you for choosing E-Shopee. Start exploring the world of smart shopping today!</p>
        <div className="cta-buttons">
          <a href="/shop" className="cta-button primary">Shop Our Best Sellers</a>
          <a href="/contact" className="cta-button secondary">Need Help? Contact Us</a>
        </div>
      </footer>
      
    </div>
    </div>
  )
}

export default AboutUs
