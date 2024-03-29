import express from "express";
import Product from "../Models/productModels.js";
import data from "../data.js";

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  await Product.remove({});
  const createdProduct = await Product.insertMany(data.products);
  res.send({ createdProduct });
});

export default seedRouter;
