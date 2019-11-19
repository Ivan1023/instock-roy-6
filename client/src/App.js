import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LocationsPage from './pages/LocationsPage/LocationsPage';
import Nav from './components/Nav/Nav';


function App() {
  return (
    ReactDOM.render(
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" exact component={LocationsPage}></Route>
          <Route path="/warehouses" exact component={LocationsPage}></Route>
        </Switch>
      </BrowserRouter>
      ,document.getElementById('root')
    )
  );
}

export default App;
