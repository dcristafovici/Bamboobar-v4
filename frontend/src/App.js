import React, {useState, useEffect} from "react"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import CreateProduct from "./components/product/CreateProduct";
import CreateCategory from "./components/category/CreateCategory";
import Home from "./pages/Home";
import axios from "axios"
import './App.css';

const App = () => {
  useEffect(() => {

    const checkLoggedIn = async() => {
      let token = localStorage.getItem('auth-token')
      const tokenResponse = await axios.post(
        '/api/auth/check',
        null,
        {headers: {'x-auth-token': token}}
      )
      if(tokenResponse.data){
        const user = await axios.get(
          '/api/auth/get',
          {headers: {'x-auth-token': token}}
        )
        localStorage.setItem('user', JSON.stringify(user.data))
      }
    }

    checkLoggedIn()

  }, [])
  return(
    <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
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
