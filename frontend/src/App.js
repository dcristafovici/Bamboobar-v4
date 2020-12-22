import React, {useState, useEffect} from "react"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import CreateProduct from "./components/product/CreateProduct";
import CreateCategory from "./components/category/CreateCategory";
import Home from "./pages/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import axios from "axios"
import {connect} from "react-redux"
import {setUserData} from "./redux/actions/authAction";
import {clearUserData} from "./redux/actions/authAction";
import Account from "./components/auth/Account";
import './App.css';



const App = ({setUserData, auth, clearUserData}) => {

  useEffect(()=> {
    const checkLoggedIn = async() => {
      let token = localStorage.getItem('auth-token')
      if(token === null){
        localStorage.setItem('auth-token', '')
        token = ""
      }
      const tokenRes = await axios.post(
        '/api/auth/tokenIsValid',
        null,
        {headers: {'x-auth-token': token}}
      )
      if(tokenRes.data){
        const userRes = await axios.get(
          '/api/auth/',
          {headers : {'x-auth-token' : token}}
        )
        setUserData(token, userRes.data)
      }
    };

    checkLoggedIn()

  }, [])

  const logOut = (event) => {
    event.preventDefault()
    clearUserData()
    // localStorage.setItem('auth-token', '')
  }
  return(
    <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/account/'>Account</Link>
              </li>
              <li>
                <Link to='/product/create'>Create Product</Link>
              </li>
              <li>
                <Link to='/category/create'>Create Category</Link>
              </li>
              {auth.user ? (
                <li>
                  <a href="#" onClick={logOut}>Log out</a>
                </li>
              ) : (
                <>
                  <li>
                    <Link to="/auth/login">Login</Link>
                  </li>
                  <li>
                    <Link to="Register">Register</Link>
                  </li>
                </>
              )}
            </ul>
          </nav>

          <Switch>
            <Route path="/account/">
              <Account />
            </Route>
            <Route path="/product/create">
              <CreateProduct />
            </Route>
            <Route path="/category/create">
              <CreateCategory />
            </Route>
            <Route path="/auth/login">
              <Login/>
            </Route>
            <Route path="/auth/register">
              <Register/>
            </Route>
            <Route path="/">
              <Home />
            </Route>

          </Switch>
        </div>
    </Router>
  )
}


const mapStateToProps = (state) =>{
  return{
    auth: state.authReducer
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    setUserData: (token, user) => dispatch(setUserData(token, user)),
    clearUserData: () => dispatch(clearUserData)
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App)
