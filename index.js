import express from "express";
import cors from "cors";
import productController from "./controllers/productsController.js";
import tableController from "./controllers/tableController.js";
import conectar, { client } from "./database/database.js";

const app = express();
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.json({ message: "Bienvenidos a la app" });
});
app.use("/productos", productController);

app.use("/table", tableController);

const port = 4000;

conectar();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
