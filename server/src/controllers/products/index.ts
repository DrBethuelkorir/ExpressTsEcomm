    import {type Request, type Response} from "express"

    export function getProducts(req:Request, res:Response){
        res.send("Get all products")
    }
    export function getProductById(req:Request, res:Response){
        res.send("Get product by ID")
    }
    export function createProduct(req:Request, res:Response){
        res.send("Create a new product")
    }
    export function updateProduct(req:Request, res:Response){
        res.send("Update a product")
    }
    export function deleteProduct(req:Request, res:Response){
        res.send("Delete a product")
    }