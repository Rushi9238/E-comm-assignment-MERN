import { asyncHandler } from "../utils/asyncHandler.js";

export const placeOrder = asyncHandler(async (req, res) => {
  try {
    let { firstName, lastName, address, cart } = req.body;
     cart = JSON.parse(cart);

   // Validate required fields and types
    if (!firstName || typeof firstName !== "string") {
      return res.status(400).json({
        status: false,
        message: "First name is required and must be a string.",
        data: null,
      });
    }

    if (!lastName || typeof lastName !== "string") {
      return res.status(400).json({
        status: false,
        message: "Last name is required and must be a string.",
        data: null,
      });
    }

    if (!address || typeof address !== "string") {
      return res.status(400).json({
        status: false,
        message: "Address is required and must be a string.",
        data: null,
      });
    }

    if (!cart || !Array.isArray(cart) || cart.length === 0) {
      return res.status(400).json({
        status: false,
        message: "Cart must be a non-empty array.",
        data: null,
      });
    }

    // Log order placement
    console.log("✅ Order received:");
    console.log("Customer:", firstName, lastName);
    console.log("Address:", address);
    console.log("Cart:", cart);

    res.status(200).json({
      status: true,
      message: "Order placed successfully!",
      data: {
        orderDetails: {
          orderNo: Math.floor(1000 + Math.random() * 9000), // random order no
          firstName: firstName,
          lastName: lastName,
          address: address,
          cart: cart,
        },
      },
    });
  } catch (err) {
    console.error("❌ Error in placing order:", err.message);
    res.status(500).json({
      status: false,
      message: "Something went wrong while placing the order.",
      data: null,
    });
  }
});
