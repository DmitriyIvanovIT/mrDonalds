import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import GlobalStyle from './Components/style/GlobalStyle';
import Menu from './Components/Menu/Menu';
import { ModalItem } from './Components/Modal/ModalItem';
import NavBar from './Components/NavBar/NavBar';
import Order from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';
import { useDB } from './Components/Hooks/useDB';
import OrderConfirm from './Components/Order/OrderConfirm';
import { useOrderConfirm } from './Components/Hooks/useOrderConfirm';
import { Context } from './Components/Functions/contex';

const firebaseConfig = {
  apiKey: "AIzaSyCaSbt9S-LYbjNcuJ7b7f8Jp9C4zLgqeQU",
  authDomain: "mrdonalds-209ad.firebaseapp.com",
  databaseURL: "https://mrdonalds-209ad-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mrdonalds-209ad",
  storageBucket: "mrdonalds-209ad.appspot.com",
  messagingSenderId: "830921358006",
  appId: "1:830921358006:web:8073b67ed6524d0732c417",
  measurementId: "G-1X3MNCJV5S"
};

firebase.initializeApp(firebaseConfig);

function App() {
  const auth = useAuth(firebase.auth);
  const database = firebase.database();
  const openItem = useOpenItem();
  const orders = useOrders();

  const orderConfirm = useOrderConfirm();

  const dbMenu = useDB(database);

  useTitle(openItem.openItem);

  return (
    <Context.Provider value={{
      auth,
      openItem,
      orders,
      orderConfirm,
      dbMenu,
      database
    }}>
      <GlobalStyle/>
      <NavBar/>
      <Order/>
      <Menu/>
      {openItem.openItem && <ModalItem/>}
      {orderConfirm.openOrderConfirm && <OrderConfirm/>
      }
    </Context.Provider>
  );
}

export default App;
