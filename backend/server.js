const express = require("express");
const cors = require("cors");
require("dotenv").config();
require('./DB/database');
const { Item } = require("./models/item.js");

const app = express();
app.use(cors());
app.use(express.json()); 

app.get("/item", async (req, res) => {
    try {
      const items = await Item.find({});
      return res.status(200).json({
        count: items.length,
        data: items,
      });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
});

app.get("/item/:id", async (req, res) => {
    try {
      const item = await Item.findById(req.params.id);
      if (!item) {
        return res.status(404).send({ message: "Item not found" });
      }
      return res.status(200).json(item);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
});

app.post("/item", async (req, res) => {
    try {
      const { name, email, phoneno, title, description, image } = req.body;
  
      if (!name || !email || !phoneno || !title || !description) {
        return res.status(400).send({ message: "All fields are required" });
      }
  
      const newItem = await Item.create({
        name,
        email,
        phoneno,
        title,
        description,
        image: image || "", 
      });
  
      return res.status(201).json(newItem);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Error creating item" });
    }
});

app.delete("/item/:id", async (req, res) => {
    try {
      const deletedItem = await Item.findByIdAndDelete(req.params.id);
      if (!deletedItem) {
        return res.status(404).send({ message: "Item not found" });
      }
      return res.status(200).send({ message: "Item deleted successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: error.message });
    }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
