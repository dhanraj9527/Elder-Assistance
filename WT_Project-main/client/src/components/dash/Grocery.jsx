import React, { useState } from 'react';

const Grocery = () => {
  // Dummy data for demonstration
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const dummyData = [
    { id: 1, items: "Britannia Marie Gold ", price: 25, Shop: "vilas stores", image: require("../asset/images/marie.jpg") },
    { id: 2, items: "Tata Salt", price: 10, Shop: "vilas stores", image: require("../asset/images/tata_salt.jpg") },
    { id: 3, items: "Colgate Toothpaste", price: 40, Shop: "vilas stores", image: require("../asset/images/colgate.jpg") },
    { id: 4, items: "Dettol Handwash", price: 50, Shop: "vilas stores", image:require("../asset/images/dettol.jpg")},
    { id: 5, items: "Lays Chips", price: 30, Shop: "vilas stores", image: require("../asset/images/lays.jpg" )},
    { id: 6, items: "Cadbury Dairy Milk", price: 50, Shop: "vilas stores", image:require("../asset/images/dairy milk.jpg") },
    { id: 7, items: "Kurkure", price: 20, Shop: "vilas stores", image: require( "../asset/images/kurkure.jpg" )},
    { id: 8, items: "Bourbon Biscuit", price: 25, Shop: "vilas stores", image: require("../asset/images/bourbon.jpg") },
    { id: 9, items: "Sprite", price: 35, Shop: "vilas stores", image: require("../asset/images/sprite.jpg") },
    { id: 10, items: "Pepsi", price: 35, Shop: "vilas stores", image: require("../asset/images/pepsi.jpg" )},
    { id: 11, items: "Maggi Noodles", price: 15, Shop: "vilas stores", image: require( "../asset/images/maggi.jpg") },
    { id: 12, items: "Parle-G Biscuit", price: 10, Shop: "vilas stores", image: require("../asset/images/parle-g.jpg" )}


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

const generateBill = () => {
  const currentDate = new Date().toLocaleString();
  // Calculate the total price based on the items in the cart
  const billTotalPrice = cart.reduce((total, item) => total + item.price, 0);
  alert(`Date: ${currentDate}\n\nItems:\n${cart.map((item) => `${item.items} - Rs-${item.price}`).join("\n")}\n\nTotal Price: Rs-${billTotalPrice}`);
};


  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px auto', maxWidth: '900px' }}>
      <h3 style={{ textAlign: 'center', marginBottom: '20px', color:'yellow' }}><b>Welcome to Grocery Mart</b></h3>
      <div className="grocery" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
        {/* Map through the data and render each item */}
        {dummyData.map((item) => (
          <div key={item.id} className="res-card" style={{ backgroundColor: "#f0f0f0", border: "2px solid black", width: "23%", padding: "10px", textAlign: "center", marginBottom: "20px" }}>
            <img className="reslogo" alt="res-logo" src={item.image} style={{ maxWidth: "100%", height: "auto", marginBottom: "10px" }} />
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

export default Grocery;
