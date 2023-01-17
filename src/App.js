import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Booklist from "./components/Booklist";
import Cart from "./components/Cart";
import './styles/booklist.css'

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);

      return;
    }
    setCart([...cart, item]);
  };

  return (
    <React.Fragment>
      <Navbar size={cart.length}></Navbar>
      <Booklist handleClick={handleClick}></Booklist>
      <Cart></Cart>
      {warning && <div className="warning">Item is already in cart!</div>}
    </React.Fragment>
  );
};

export default App;
