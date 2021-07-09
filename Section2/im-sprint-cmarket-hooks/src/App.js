import React, { useState } from 'react';
import Nav from './components/Nav';
import ItemListContainer from './pages/ItemListContainer';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ShoppingCart from './pages/ShoppingCart';
import { initialState } from './assets/state';

function App() {

  const [items] = useState(initialState.items);
  const [cartItems, setCartItems] = useState(initialState.cartItems);

  const handlePlusCartItems = (itemId) => {
    const cartItemsItemIds = cartItems.map((el) => el.itemId);

    if(cartItemsItemIds.includes(itemId)) {
      alert("이미 같은 상품이 장바구니에 존재합니다.");
    } else {
      const newCartItem = {
        itemId: itemId,
        quantity: 1
      };
      const newCartItems = cartItems.slice();
      newCartItems.push(newCartItem);
      setCartItems(newCartItems);
    }
  }

  const handleDeleteCartItems = (itemId) => {
    const newCartItems = cartItems.filter((el) => el.itemId !== itemId);
    setCartItems(newCartItems);
  }

  const handleQuantityOfCartItems = (quantity, itemId) => {
    const newCartItems = cartItems.slice();
    for(let el of newCartItems) {
      if(el.itemId === itemId) {
        el.quantity = quantity;
      }
    }
    setCartItems(newCartItems);
  }

  return (
    <Router>
      <Nav cartItemsLength={cartItems.length} />
      <Switch>
        <Route exact={true} path="/">
          <ItemListContainer items={items} handlePlusCartItems={(itemId) => handlePlusCartItems(itemId)} />
        </Route>
        <Route path="/shoppingcart">
          <ShoppingCart 
            cartItems={cartItems}
            items={items}
            handleDeleteCartItems={(itemId) => handleDeleteCartItems(itemId)}
            handleQuantityOfCartItems={(quantity, itemId) => handleQuantityOfCartItems(quantity, itemId)}
            />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
