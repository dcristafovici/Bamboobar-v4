import React, {useState, useEffect} from "react"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import CreateProduct from "./components/product/CreateProduct";
import CreateCategory from "./components/category/CreateCategory";
import Home from "./pages/Home";
import {setUserData} from "./redux/actions/authAction";
import axios from "axios"
import {connect} from "react-redux";
import './App.css';

const App = ({setUserData}) => {
  useEffect(() => {

    const checkLoggedIn = async() => {
      let token = '';
      token = localStorage.getItem('auth-token')
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
        setUserData(user.data)
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
