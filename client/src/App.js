import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import LocationsPage from './pages/LocationsPage/LocationsPage';
import InventoryPage from './pages/InventoryPage/InventoryPage';
import SpecificWarehousePage from './pages/SpecificWarehousePage/SpecificWarehousePage';
import ProductPage from './pages/ProductPage/ProductPage';
import Axios from 'axios';

class App extends React.Component {
  inventoryUrl = "http://localhost:8080/inventorydata";
  locationUrl = "http://localhost:8080/locationdata";
  state = {
    products: [],
    warehouses: []
  }

  getInventory = () => {
    Axios.get(`${this.inventoryUrl}`)
    .then(response => {
      this.setState({
        products: response.data
      })
    })
  }

  getWarehouse = () => {
    Axios.get(`${this.locationUrl}`)
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

  componentDidUpdate(prevState){
    if(this.prevState.products !== this.state.products || this.state.products !== undefined){
      this.getInventory();
    }
  }

  render() {
    return (
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route path='/' exact render={() => <InventoryPage getInventory={this.getInventory} products= {this.state.products}/>} />
            <Route path='/warehouses' exact render={() => <LocationsPage warehouses= {this.state.warehouses}/>} />
            <Route path="/warehouses/warehouse" component={SpecificWarehousePage}></Route>
            <Route path="/products" exact component={ProductPage}></Route>
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
