import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Main from './components/main/main'


function App() {
  return (
    ReactDOM.render(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main}></Route>
        </Switch>
      </BrowserRouter>
      ,document.getElementById('root')
    )
  );
}

export default App;
