import express from "express";
import productController from "./controllers/productsController.js";

const app = express();
app.get("/", (req, res) => {
  res.json({ message: "Bienvenidos a la app" });
});
app.use("/productos", productController);

const port = 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
