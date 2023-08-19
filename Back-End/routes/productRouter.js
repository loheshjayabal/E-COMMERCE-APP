import express from "express";
import Product from "../Models/productModels";

productRouter.get("/", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

app.get(`/sluig/:slug`, (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "product not found" });
  }
});

app.get(`/:id`, (req, res) => {
  const product = data.products.find((x) => x.id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "product not found" });
  }
});
