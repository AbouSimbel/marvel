import './App.css';
import Home from "./containers/Home";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Comics from './containers/Comics';
import Character from './containers/Character';

function App() {
  return (
    <Router>
      <Switch>

      <Route path="/character/:id">
        <Character/>
      </Route>

      <Route path="/characters">
        <Home/>
      </Route>

      <Route path="/comics">
        <Comics/>
      </Route>

      <Route path="/">
        <Redirect to="/characters"/>
      </Route>

      </Switch>
    </Router>
  );
}

export default App;
