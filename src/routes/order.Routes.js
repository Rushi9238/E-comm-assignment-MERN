import express from 'express'
import { placeOrder } from '../controller/order.Controller.js';
import { upload } from '../middlewares/multer.middleware.js';
 

const orderRouter = express.Router();

orderRouter.post("/",upload.none(), placeOrder);

export default  orderRouter;