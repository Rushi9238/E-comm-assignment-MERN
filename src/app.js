import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "16kb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);

app.use(express.static("public"));

app.use(cookieParser());

// Imports Routes
import productRouter from "./routes/product.Routes.js";
import orderRouter from "./routes/order.Routes.js";

app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

// Serve frontend in production
if (process.env.NODE_ENV === "production") {
  // Serve static files from frontend/dist
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  
  // Handle all GET requests that aren't for the API
  app.get("*", (req, res, next) => {
    // Skip API routes
    if (req.path.startsWith("/api")) {
      return next();
    }
    console.log("Serving index.html for route:", req.url);
    res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"));
  });
} else {
  // In development
  app.get("/", (req, res) => {
    res.json({ message: "Server is running in development mode" });
  });
}

// Handle undefined API routes
app.use("/api/:unmatchedRoute", (req, res) => {
  res.status(404).json({ 
    error: `API route not found: /api/${req.params.unmatchedRoute}` 
  });
});

// Generic error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});