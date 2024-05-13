const mongoose = require("mongoose");

const groceryItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  store: {
    type: String,
    required: true,
  },
});

const GroceryItem = mongoose.model("GroceryItem", groceryItemSchema);

module.exports = GroceryItem;
