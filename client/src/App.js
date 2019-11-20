import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Inventory from './pages/Inventory/Inventory'
import LocationsPage from './pages/LocationsPage/LocationsPage';
import Nav from './components/Nav/Nav';
import InventoryCard from './components/Inventory-Card/InventoryCard';
import InventoryProduct from './components/InventoryProduct/InventoryProduct';


function App() {
  return (
    ReactDOM.render(
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" exact component={LocationsPage}></Route>
          <Route path="/warehouses" exact component={LocationsPage}></Route>
          <Route path="/inventory" component={Inventory}></Route>
          <Route path="/products" component={InventoryCard}></Route>
          <Route path="/inventory-products" component={InventoryProduct}></Route>
        </Switch>
      </BrowserRouter>
      ,document.getElementById('root')
    )
  );
}

export default App;
