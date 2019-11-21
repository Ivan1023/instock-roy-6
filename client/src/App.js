import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LocationsPage from './pages/LocationsPage/LocationsPage';
import InventoryPage from './pages/InventoryPage/InventoryPage';
import Nav from './components/Nav/Nav';
import SpecificWarehousePage from './pages/SpecificWarehousePage/SpecificWarehousePage';
import Axios from 'axios'

class App extends React.Component {
  inventoryUrl = "http://localhost:8080/inventorydata";
  state = {
    products: []
  }

  getInventory = () => {
    Axios.get(`${this.inventoryUrl}`)
    .then(response => {
      console.log(response.data)
      this.setState({
        products: response.data
      })
    })
  }

  componentDidMount() {
    this.getInventory();
  }

  render() {
    console.log(this.state);
    return (
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route path='/' render={() => <InventoryPage products= {this.state.products}/>} />
            <Route path="/warehouses" exact component={LocationsPage}></Route>
            <Route path="/warehouses/warehouse" component={SpecificWarehousePage}></Route>
          </Switch>
        </BrowserRouter>
    );
  }

}

export default App;
