import React, { createContext, useContext, useReducer } from "react";

const Context = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }

      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }]
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload)
      };

    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item
          )
          .filter((item) => item.quantity > 0)
      };

    case "CLEAR_CART":
      return {
        ...state,
        items: []
      };

    case "UPDATE_USER_DETAILS":
      return {
        ...state,
        userDetails: { ...state.userDetails, ...action.payload }
      };
    default:
      return state;
  }
};

const initialState = {
  items: [],
  userDetails: {
    firstName: "",
    lastName: "",
    address: ""
  },
  isOrderPlaced: false
};

export const ContextProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  };

  const updateQuantity = (productId, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id: productId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const getCartTotal = () => {
    return cartState.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const getCartItemsCount = () => {
    return cartState.items.reduce((count, item) => count + item.quantity, 0);
  };

   const updateUserDetails = (details) => {
    dispatch({ type: 'UPDATE_USER_DETAILS', payload: details });
  };

  const value = {
    items: cartState.items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemsCount,
    updateUserDetails,
    userDetails:cartState.userDetails
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useCart = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
