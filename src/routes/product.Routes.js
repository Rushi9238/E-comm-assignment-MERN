import express from 'express'
import { getProducts } from '../controller/product.Controller.js';


const productRouter = express.Router();

productRouter.get("/", getProducts);

export default  productRouter;