import React from 'react';
import './contacts.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1 style={{color:'blue'}}><b>Contact Information</b></h1>

      {/* Medical contacts */}
      <div className="contact-category">
        <h2 className="category-title" style={{color:'yellow'}}><b>Medical Contacts</b></h2>
        <div className="contact-list">
          <div className="contact-item">
            <h3>Primary Care Physician</h3>
            <p>Contact: (123) 456-7890</p>
          </div>
          <div className="contact-item">
            <h3>Specialist Doctor</h3>
            <p>Contact: (987) 654-3210</p>
          </div>
          <div className="contact-item">
            <h3>Pharmacy</h3>
            <p>Contact: (555) 123-4567</p>
          </div>
          <div className="contact-item">
            <h3>Medical Supply Store</h3>
            <p>Contact: (111) 222-3333</p>
          </div>
        </div>
      </div>

      {/* Caregiver and support contacts */}
      <div className="contact-category">
        <h2 className="category-title" style={{color:'yellow'}}><b>Caregiver & Support Contacts</b></h2>
        <div className="contact-list">
          <div className="contact-item">
            <h3>Home Care Service</h3>
            <p>Contact: (111) 222-3333</p>
          </div>
          <div className="contact-item">
            <h3>Elderly Assistance Hotline</h3>
            <p>Contact: 800-ELDERLY</p>
          </div>
        </div>
      </div>

      {/* Grocery and supplies contacts */}
      <div className="contact-category">
        <h2 className="category-title" style={{color:'yellow'}}><b>Grocery & Supplies Contacts</b></h2>
        <div className="contact-list">
          <div className="contact-item">
            <h3>Local Grocery Store</h3>
            <p>Contact: (222) 333-4444</p>
          </div>
          <div className="contact-item">
            <h3>Online Grocery Delivery</h3>
            <p>Contact: www.example.com</p>
          </div>
          <div className="contact-item">
            <h3>Medical Supplies Provider</h3>
            <p>Contact: (555) 666-7777</p>
          </div>
        </div>
      </div>

      

    </div>
  );
};

export default ContactPage;