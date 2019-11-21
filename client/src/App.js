import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LocationsPage from './pages/LocationsPage/LocationsPage';
import InventoryPage from './pages/InventoryPage/InventoryPage';
import Nav from './components/Nav/Nav';
import SpecificWarehousePage from './pages/SpecificWarehousePage/SpecificWarehousePage';
import ProductPage from './pages/ProductPage/ProductPage';


function App() {
  return (
    ReactDOM.render(
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" exact component={InventoryPage}></Route>
          <Route path="/warehouses" exact component={LocationsPage}></Route>
          <Route path="/warehouses/warehouse" component={SpecificWarehousePage}></Route>
          <Route path="/products" exact component={ProductPage}></Route>
        </Switch>
      </BrowserRouter>
      ,document.getElementById('root')
    )
  );
}

export default App;
