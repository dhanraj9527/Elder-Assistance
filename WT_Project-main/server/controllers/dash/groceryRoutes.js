const express = require("express");
const router = express.Router();
const GroceryItem = require("../models/GroceryItem");

// GET all grocery items
router.get("/", async (req, res) => {
  try {
    const groceryItems = await GroceryItem.find();
    res.json(groceryItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
