import React, { useState } from 'react';

const Medicine = () => {
  // Dummy data for demonstration
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const dummyData = [
    { id: 1, items: "Paracetamol", price: 30, Shop: "Pradeep Medicals", image: require("../asset/images/paracetamol.jpg") },
    { id: 2, items: "Ibuprofen", price: 15, Shop: "Pradeep Medicals", image: require("../asset/images/Ibuprofen.jpg") },
    { id: 3, items: "Antacid", price: 50, Shop: "Pradeep Medicals", image: require("../asset/images/Antacid.jpg") },
    { id: 4, items: "Cough Syrup", price: 60, Shop: "Pradeep Medicals", image: require("../asset/images/Cough Syrup.jpg")},
    { id: 5, items: "Allergy Relief", price: 35, Shop: "Pradeep Medicals", image: require("../asset/images/Allergy Relief.jpg" )},
    { id: 6, items: "Bandages", price: 55, Shop: "Pradeep Medicals", image: require("../asset/images/Bandages.jpg") },
    { id: 7, items: "Vitamin C", price: 25, Shop: "Pradeep Medicals", image: require( "../asset/images/vitamin_c.jpg" )},
    { id: 8, items: "Eye Drops", price: 30, Shop: "Pradeep Medicals", image: require("../asset/images/eye_drops.jpg") },
    { id: 9, items: "Antibiotics", price: 45, Shop: "Pradeep Medicals", image: require("../asset/images/antibiotics.jpg") },
    { id: 10, items: "Antifungal Cream", price: 40, Shop: "Pradeep Medicals", image: require("../asset/images/antifungal_cream.jpg" )},
    { id: 11, items: "Thermometer", price: 20, Shop: "Pradeep Medicals", image: require( "../asset/images/thermometer.jpg") },
    { id: 12, items: "Laxative", price: 15, Shop: "Pradeep Medicals", image: require("../asset/images/laxative.jpg" )}
  ];

  // Function to add an item to the cart
  const addToCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    setTotalPrice(totalPrice + item.price);
  };

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    const removedItem = cart.find((item) => item.id === id);
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    setTotalPrice(totalPrice - (removedItem.price * cart.filter((item) => item.id === id).length));
  };

  // Function to generate the bill
  const generateBill = () => {
    const currentDate = new Date().toLocaleString();
    // Calculate the total price based on the items in the cart
    const billTotalPrice = cart.reduce((total, item) => total + item.price, 0);
    alert(`Date: ${currentDate}\n\nItems:\n${cart.map((item) => `${item.items} - Rs-${item.price}`).join("\n")}\n\nTotal Price: Rs-${billTotalPrice}`);
  };


  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px auto', maxWidth: '900px' }}>
      <h3 style={{ textAlign: 'center', marginBottom: '20px' , color:'yellow'}}> <b>Welcome to Medicine Mart</b></h3>
      <div className="medicine" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
        {/* Map through the data and render each item */}
        {dummyData.map((item) => (
          <div key={item.id} className="med-card" style={{ backgroundColor: "#f0f0f0", border: "2px solid black", width: "23%", padding: "10px", textAlign: "center", marginBottom: "20px" }}>
            <img className="med-logo" alt="med-logo" src={item.image} style={{ maxWidth: "100%", height: "auto", marginBottom: "10px" }} />
            <h3 style={{ marginBottom: "5px" }}>{item.items}</h3>
            <p style={{ margin: "5px 0" }}>Price: Rs-{item.price}</p>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
              <button onClick={() => { addToCart(item); }}>+</button>
              <button onClick={() => { removeFromCart(item.id); }}>-</button>
            </div>
            {cart.filter((cartItem) => cartItem.id === item.id).length > 0 && <p style={{ margin: "0", fontWeight: "bold" }}>Item Price: Rs-{item.price * cart.filter((cartItem) => cartItem.id === item.id).length}</p>}
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={generateBill}>Generate Bill</button>
      </div>
    </div>
  );
};

export default Medicine;
