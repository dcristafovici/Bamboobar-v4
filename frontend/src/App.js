import React, {useEffect, useState} from "react"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import {connect} from "react-redux"
import {loadAuthDate} from "./redux/actions/authAction";
import CreateProduct from "./components/product/CreateProduct";
import CreateCategory from "./components/category/CreateCategory";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login"
import Account from "./pages/Account";
import './App.css';



const App = ({ loadingAuth, authReducer  }) => {
  useEffect(() => {
    loadingAuth()
  }, [])

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
              <li>
                <Link to="/auth/register">Register</Link>
              </li>


              {authReducer.user ?(
                <li>
                  <a href="#">Logout</a>
                </li>
              ):
                (
                  <li>
                    <Link to="/auth/login">Login</Link>
                  </li>
                )}

            </ul>
          </nav>

          <Switch>
            <Route path="/product/create">
              <CreateProduct />
            </Route>
            <Route path="/category/create">
              <CreateCategory />
            </Route>
            <Route path="/auth/register">
              <Register/>
            </Route>
            <Route path="/auth/account">
              <Account/>
            </Route>
            <Route path="/auth/login">
              <Login />
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
    authReducer: state.authReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadingAuth : () => dispatch(loadAuthDate()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
