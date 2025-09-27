import React from "react";
import { Card, CardContent, CardFooter } from "./ui/Card";
import { Plus } from "lucide-react";
import { useCart } from "../context/ContextProvider";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const handleAddToCart = () => {
    addToCart(product);
  };
  return (
    <Card className="group h-full bg-gradient-to-br from-card to-secondary/20 border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-4">
        <div className="aspect-square relative overflow-hidden rounded-lg mb-4 bg-muted border-2  mt-5">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h3 className="font-semibold text-lg text-foreground mb-2 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            ${product.price.toFixed(2)}
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <button
          onClick={()=>handleAddToCart(product)}
          className="w-full inline-flex items-center justify-center rounded-md p-2 font-bold bg-primary from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add to Cart
        </button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
