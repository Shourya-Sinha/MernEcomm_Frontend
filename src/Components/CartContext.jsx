// import React, { createContext, useContext, useState } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {
//     setCartItems([...cartItems, item]);
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);

// import React, { createContext, useContext, useState, useEffect } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const storedCartItems = localStorage.getItem('cartItems');
//     if (storedCartItems) {
//       setCartItems(JSON.parse(storedCartItems));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//   }, [cartItems]);

//   const addToCart = (item) => {
//     setCartItems((prevItems) => {
//       const existingItem = prevItems.find((cartItem) => cartItem._id === item._id);
//       if (existingItem) {
//         return prevItems.map((cartItem) =>
//           cartItem._id === item._id
//             ? { ...cartItem, quantity: cartItem.quantity + 1 }
//             : cartItem
//         );
//       }
//       return [...prevItems, { ...item, quantity: 1 }];
//     });
//   };

//   const updateQuantity = (itemId, quantity) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item._id === itemId ? { ...item, quantity: quantity } : item
//       )
//     );
//   };

//   const removeFromCart = (itemId) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item._id !== itemId));
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);

// import React, { createContext, useContext, useState, useEffect } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const storedCartItems = localStorage.getItem('cartItems');
//     if (storedCartItems) {
//       console.log("Loading cart items from local storage:", storedCartItems);
//       setCartItems(JSON.parse(storedCartItems));
//     }
//   }, []);

//   useEffect(() => {
//     console.log("Saving cart items to local storage:", cartItems);
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//   }, [cartItems]);

//   const addToCart = (item) => {
//     setCartItems((prevItems) => {
//       const existingItem = prevItems.find((cartItem) => cartItem._id === item._id);
//       if (existingItem) {
//         return prevItems.map((cartItem) =>
//           cartItem._id === item._id
//             ? { ...cartItem, quantity: cartItem.quantity + 1 }
//             : cartItem
//         );
//       }
//       return [...prevItems, { ...item, quantity: 1 }];
//     });
//   };

//   const updateQuantity = (itemId, quantity) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item._id === itemId ? { ...item, quantity: quantity } : item
//       )
//     );
//   };

//   const removeFromCart = (itemId) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item._id !== itemId));
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);
// src/CartContext.js
import React, { createContext, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateQuantity, removeFromCart } from '../store/slice/cartslice';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const addToCartHandler = (item) => {
    dispatch(addToCart(item));
  };

  const updateQuantityHandler = (itemId, quantity) => {
    dispatch(updateQuantity({ itemId, quantity }));
  };

  const removeFromCartHandler = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart: addToCartHandler, updateQuantity: updateQuantityHandler, removeFromCart: removeFromCartHandler }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);


