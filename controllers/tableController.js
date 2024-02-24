import express from "express";
import { client } from "../database/database.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const query =
    "CREATE TABLE products (id SERIAL PRIMARY KEY, name VARCHAR(100), price INT)";
  await client.query(query);
  res.json({ message: "Tabla Creada" });
});

export default router;
