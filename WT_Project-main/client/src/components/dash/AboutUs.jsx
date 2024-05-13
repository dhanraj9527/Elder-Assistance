import React from 'react';

function AboutUs() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, boxSizing: 'border-box' }}>
      <header style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '20px' }}>
        <h1>Elder Assistant</h1>
        <p>Your Trusted Companion for Elder Care</p>
        
      </header>

      <main>
        <section id="about-us" style={{ padding: '40px', textAlign: 'center',color:'yellow' }} className="about-us-content">
          <h2>About Us</h2>
          <p>Welcome to Elder Assistant, where we are dedicated to providing exceptional care for your elderly family members. Our mission is to create a supportive and comfortable environment for seniors, ensuring their well-being and happiness.</p>

          <p>At Elder Assistant, we understand the unique needs of older adults and tailor our services to meet those needs. Our team consists of compassionate professionals committed to delivering high-quality care and assistance.</p>

          <p>Whether it's health care services, grocery assistance, or nurse support, we strive to make a positive impact on the lives of the elderly and their families. Your trust in us is our greatest motivation, and we are honored to be a part of your caregiving journey.</p>

          <p>Thank you for choosing Elder Assistant. We look forward to serving you and your loved ones with dedication, empathy, and excellence.</p>
        </section>
      </main>

      <footer style={{ textAlign: 'center' }}>
        <p style={{color:'yellow'}}>&copy; 2024 Elder Assistant. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default AboutUs;
