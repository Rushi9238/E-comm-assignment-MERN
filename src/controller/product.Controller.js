import { products } from "../db/data.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// GET /api/products
export const getProducts = asyncHandler(async (req, res) => {
  res.status(200).json({
    status:true,
    message:"Product list found",
    data:products
  })
});