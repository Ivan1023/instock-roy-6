import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from './components/Main/Main';
import LocationsPage from './pages/LocationsPage/LocationsPage';


function App() {
  return (
    ReactDOM.render(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main}></Route>
          <Route path="/warehouses" exact component={LocationsPage}></Route>
        </Switch>
      </BrowserRouter>
      ,document.getElementById('root')
    )
  );
}

export default App;
