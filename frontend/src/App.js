import React from "react"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import CreateProduct from "./components/product/CreateProduct";
import CreateCategory from "./components/category/CreateCategory";
import Home from "./pages/Home";
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
                <Link to='/product/create'>Create Product</Link>
              </li>
              <li>
                <Link to='/category/create'>Create Category</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/product/create">
              <CreateProduct />
            </Route>
            <Route path="/category/create">
              <CreateCategory />
            </Route>
            <Route path="/">
              <Home />
            </Route>

          </Switch>
        </div>
    </Router>
  )
}





export default App
