import React, {useState, useEffect} from "react"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import CreateProduct from "./components/product/CreateProduct";
import CreateCategory from "./components/category/CreateCategory";
import Home from "./pages/Home";
import Account from "./pages/Account";
import axios from "axios";
import {connect} from 'react-redux'
import './App.css';
import {setUserData} from "./redux/actions/authAction";
import Thanks from "./pages/Thanks";

const App = ({setUserData}) => {
  useEffect(() => {

    const checkLoggedIn = async() => {
      let token = ''
      token = localStorage.getItem('auth-token')
      if(token !== null){
        const tokenResponse = await axios.post(
          '/api/auth/check',
          null ,
          {headers: {'x-auth-token': token}})
        if(tokenResponse.data){
          setUserData(tokenResponse.data)
        }
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
              <Route path='/account'>
                <Account/>
              </Route>
              <Route path='/thanks'>
                <Thanks />
              </Route>
              <Route path="/">
                <Home />
              </Route>

            </Switch>
          </div>
      </Router>
  )
}

const mapStateToProps = (state) => {
  return{

  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    setUserData: (user) => dispatch(setUserData(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
