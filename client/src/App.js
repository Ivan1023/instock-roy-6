import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
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
  componentDidUpdate() {
    //to display the data without refreshing the page
    this.getWarehouse();
  }

  render() {
    return (
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route path='/' exact render={() => <InventoryPage products= {this.state.products} />} />
            <Route path='/locations' exact render={() => <LocationsPage warehouses= {this.state.warehouses}/>} />
            <Route path="/locations/:id" render={(props) => <SpecificWarehousePage {...props} products= {this.state.products}/>} />
            <Route path="/products" exact component={ProductPage}></Route>
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
