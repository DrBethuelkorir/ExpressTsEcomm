import "dotenv/config"; 
import express, {json} from "express";
import productsRoutes from "./routes/productsRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());

app.use("/api/products", productsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});