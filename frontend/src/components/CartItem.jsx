import { Minus, Plus, Trash2 } from "lucide-react";
import React from "react";
import { useCart } from "../context/ContextProvider";

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(item.id, newQuantity);
    }
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="sm:flex  items-center gap-4 p-4 bg-card border border-border rounded-lg">
      <div className="sm:flex-1 flex gap-4">
        <div className="w-16 h-16 bg-muted rounded-lg overflow-hidden flex-shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-foreground line-clamp-1">
            {item.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-1">
            {item.description}
          </p>
          <p className="text-lg font-semibold text-primary mt-1">
            ${item.price.toFixed(2)}
          </p>
        </div>
      </div>

      <div className=" flex items-center gap-6 justify-between">
        <div className="flex items-center gap-0.5">
          <button
            className="cursor-pointer"
            onClick={() => handleQuantityChange(item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            <Minus className="h-4 w-4" />
          </button>

          <div className="w-16 text-center">{item.quantity}</div>

          <button
            className="cursor-pointer"
            onClick={() => handleQuantityChange(item.quantity + 1)}
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>

        <div className="text-right">
          <p className="font-semibold text-foreground mb-2">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
          <button
            variant="ghost"
            size="sm"
            onClick={handleRemove}
            className="text-red-500 hover:text-destructive hover:bg-destructive/10 mt-1 cursor-pointer"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
//

export default CartItem;
