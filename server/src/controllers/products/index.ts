    import {type Request, type Response} from "express"
import { productsTable } from "../../db/Schema.js";
import db from "../../db/index.js";
import { eq } from "drizzle-orm/sql/expressions/conditions";


    export async function getProducts(req:Request, res:Response){
       try{

        const products = await db.select().from(productsTable);
        res.status(200).json({ products })

       }catch (error) {
        res.status(500).json({message: "Products not found", error})
       }
    }
    export async function getProductById(req:Request, res:Response){
        try{

        const { id } = req.params;
        const product = await db.select().from(productsTable)
        .where(eq(productsTable.id, Number(id)));
        res.status(200).json({ product })

       }catch (error) {
        res.status(500).json({message: "Products not found", error})
       }
    }
    export async function createProduct(req:Request, res:Response){
        try {

        const [newProduct] = await db.insert(productsTable)
        .values(req.body)
        .returning();

        res.status(201).json({message: "Product created successfully", product: newProduct})
        }catch (error) {
            res.status(500).json({message: "Error creating product", error})
        }
        
    }
    export async function updateProduct(req:Request, res:Response){
        try{
            const { id } = req.params;
            const [updatedProduct] = await db.update(productsTable)
            .set(req.body)
            .where(eq(productsTable.id, Number(id)))
            .returning();

            res.status(200).json({message: "Product updated successfully", product: updatedProduct})

       }catch (error) {
        res.status(500).json({message: "Products not found", error})
       }
    }
    export async function deleteProduct(req:Request, res:Response){
        try{
            const { id } = req.params;
            const [deletedProduct] = await db.delete(productsTable)
            .where(eq(productsTable.id, Number(id)))
            .returning();

            res.status(200).json({message: "Product deleted successfully"})

       }catch (error) {
        res.status(500).json({message: "Products not found", error})
       }
    }