import React from "react"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import CreateProduct from "./components/product/CreateProduct";
import './App.css';


const App = () => {
  return(
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/create'>Create</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/create">
            <CreateProduct />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>


      </div>
    </Router>
  )
}


function Home() {
  return <h2>Home</h2>;
}


export default App;
