import express from "express";
import { client } from "../database/database.js";

const router = express.Router();

// router.get("/", (req, res) => {
//   res.json({ message: "Product List." });
// });

// router.get("/:id", (req, res) => {
//   res.json({ message: req.params.id });
// });

// router.post("/", (req, res) => {
//   res.json({ message: "Producto Registrado." });
// });

router.get("/", async (req, res) => {
  const lista = await client.query("SELECT * FROM products");
  res.json(lista.rows);
});

router.post("/", async (req, res) => {
  const query = "INSERT INTO products (name, price) VALUES ($1, $2)";
  const values = [req.body.name, req.body.price];
  await client.query(query, values);
  res.json({ message: "Producto Creado" });
});

export default router;
