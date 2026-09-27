import express from "express";
import {getProducts,
     getProductById, 
     createProduct,
      updateProduct,
     deleteProduct} from "../controllers/products/index.js"

     console.log("✅ productsRoutes.ts loaded");  
const router = express.Router()

console.log("Registering routes on products router");

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

console.log("✅ products router configured"); 

export default router;