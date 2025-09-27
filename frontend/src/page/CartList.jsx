import React, { useState } from "react";
import { useCart } from "../context/ContextProvider";
import CartItem from "../components/CartItem";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";
import { CheckCircle, ShoppingBag } from "lucide-react";
import { placeOrder } from "../services/api";
import { useNavigate } from "react-router-dom";

const InputBoxStyle =
  "border rounded-md py-2 px-2 block w-full outline-none mt-1.5 text-sm";

const CartList = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [orderError, setOrderError] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const { items, updateUserDetails, userDetails, clearCart, getCartTotal } =
    useCart();

  const handleInputChange = (field, value) => {
    updateUserDetails({ [field]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!userDetails.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!userDetails.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!userDetails.address.trim()) {
      newErrors.address = "Address is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleClearCart = () => {
    clearCart();
    navigate("/");
  };

  const handlePlaceOrder = async () => {
    if (items.length === 0) {
      setOrderError("Your cart is empty");
      return;
    }

    if (!validateForm()) {
      setOrderError("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    setOrderError("");

    try {
      const orderData = { ...userDetails, cart: items };

      const response = await placeOrder(orderData);
      if (response.status) {
        clearCart();
        setOrderPlaced(true);
      } else {
        setOrderError(response.message);
      }

      // Simulate successful order placement

      // Optionally reset user details (depends on your app logic)
      // updateUserDetails({ firstName: "", lastName: "", address: "" });

      // Reset success message after 5 seconds
      // setTimeout(() => setOrderPlaced(false), 5000);
    } catch (error) {
      setOrderError("Failed to place order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-md text-center">
          <CardContent className="pt-6">
            <CheckCircle className="h-16 w-16 text-secondary mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-secondary mb-2">
              Order Placed!
            </h1>
            <p className="text-muted-foreground mb-6">
              Thank you for your purchase. Your order has been successfully
              placed.
            </p>
            <button
              onClick={handleClearCart}
              className="w-full border py-2 rounded-md bg-primary text-white font-bold"
            >
              Continue Shopping
            </button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <ShoppingBag className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold text-foreground">Your Cart</h1>
        </div>

        {items.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Your cart is empty
              </h2>
              <p className="text-muted-foreground">
                Add some products to get started!
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Items ({items.length})
              </h2>
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            {/* Order Summary & User Details */}
            <div className="space-y-6">
              {/* User Details Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Shipping Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label htmlFor="firstName">
                      First Name<span className="text-red-600">*</span>
                    </label>
                    <input
                      id="firstName"
                      value={userDetails.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      placeholder="Enter your first name"
                      className={`${InputBoxStyle} ${errors.firstName ? "border-red-500" : "border-gray-300"}`}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName">
                      Last Name<span className="text-red-600">*</span>
                    </label>
                    <input
                      id="lastName"
                      value={userDetails.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      placeholder="Enter your last name"
                      className={`${InputBoxStyle} ${errors.lastName ? "border-red-500" : "border-gray-300"}`}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="address">
                      Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="address"
                      value={userDetails.address}
                      onChange={(e) =>
                        handleInputChange("address", e.target.value)
                      }
                      placeholder="Enter your full address"
                      className={`${InputBoxStyle} ${errors.address ? "border-red-500" : "border-gray-300"}`}
                    />
                    {errors.address && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.address}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Order Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">
                      ${getCartTotal().toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">Free</span>
                  </div>
                  <hr />
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-primary">
                      ${getCartTotal().toFixed(2)}
                    </span>
                  </div>

                  {orderError && (
                    <p className="text-red-500 text-sm">{orderError}</p>
                  )}

                  {orderPlaced && (
                    <p className="text-green-600 text-sm">
                      Order placed successfully!
                    </p>
                  )}

                  <button
                    onClick={handlePlaceOrder}
                    disabled={isSubmitting || items.length === 0}
                    className="w-full bg-primary from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 py-2 px-4 rounded text-white font-medium disabled:opacity-50"
                  >
                    {isSubmitting ? "Placing Order..." : "Place Order"}
                  </button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartList;
