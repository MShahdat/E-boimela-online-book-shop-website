import React, { createContext, useEffect, useState } from 'react';

export const dataContext = createContext();

const Context = (props) => {
  const [name, setName] = useState('E-boimela');
  const [open, setOpen] = useState(false);
  const [video, setVideo] = useState(false);
  const [payment, setPayment] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const [cart, setCart] = useState(() => {
    const storeCart = localStorage.getItem('e-boimelCart')
    return storeCart ? JSON.parse(storeCart) : []
  });
  const [search, setSearch] = useState(false);

  const subtot = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  const addToCart = (book) => {
    setCart(prev => [...prev, { ...book, quantity: 1 }])
  }

  const removeCart = (book) => {
    setCart(cart.filter(item => item.id !== book.id))
  }

  const quantityIncrement = (book) => {
    setCart(cart.map(item => item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item))
  }

  const quantityDecrement = (product) => {
        setCart(cart.map(item => item.id === product.id && item.quantity > 1 ?
            { ...item, quantity: item.quantity - 1 } : item
        ))
    }

  useEffect (() => {
    localStorage.setItem('e-boimelCart', JSON.stringify(cart))
  }, [cart])
  return (
    <div>
      <dataContext.Provider
        value={[
          name,
          open,
          setOpen,
          video,
          setVideo,
          payment,
          setPayment,
          cartOpen,
          setCartOpen,
          addToCart,
          cart,
          removeCart,
          quantityIncrement,
          quantityDecrement,
          subtot,
          setCart,
          search,
          setSearch,
        ]}
      >
        {props.children}
      </dataContext.Provider>
    </div>
  );
};

export default Context;