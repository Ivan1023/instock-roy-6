import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import LocationsPage from './pages/LocationsPage/LocationsPage';
import InventoryPage from './pages/InventoryPage/InventoryPage';
import SpecificWarehousePage from './pages/SpecificWarehousePage/SpecificWarehousePage';
import ProductPage from './pages/ProductPage/ProductPage';
import Axios from 'axios';

class App extends React.Component {
  Url = "http://localhost:8080";
  state = {
    products: [],
    warehouses: []
  }

  getInventory = () => {
    Axios.get(`${this.Url}/inventory`)
      .then(response => {
        this.setState({
          products: response.data
        })
      })
  }
  removeInventory = (id) => {
    Axios.delete(`${this.Url}/inventory/${id}`)
      .then(response => {
        return this.getInventory()
      })
  }

  getWarehouse = () => {
    Axios.get(`${this.Url}/locations`)
      .then(response => {
        this.setState({
          warehouses: response.data
        })
      })
  }

  componentDidMount() {
    this.getInventory();
    this.getWarehouse();
  }

  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path='/' exact render={(props) => <InventoryPage {...props} products={this.state.products} remove={this.removeInventory} />} />
          <Route path='/locations' exact render={() => <LocationsPage warehouses={this.state.warehouses} />} />
          <Route path="/locations/:id" render={(props) => <SpecificWarehousePage {...props} products={this.state.products} />} />
          {/* <Route path="/products" render={(props) => <ProductPage products={this.state.products} />} /> */}
          <Route path="/products/:id" render={(props) => <ProductPage {...props} products={this.state.products} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

