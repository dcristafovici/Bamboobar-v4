import React, {useState, useEffect} from "react"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import CreateProduct from "./components/product/CreateProduct";
import CreateCategory from "./components/category/CreateCategory";
import Home from "./pages/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import UserContext from "./context/UserContext";
import axios from "axios"
import './App.css';

const App = () => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined
  })
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
        setUserData({
          token,
          user: userRes.data
        })
      }
    };

    checkLoggedIn()

  }, [])

  const logOut = (event) => {
    event.preventDefault()
    setUserData({
      token: undefined,
      user: undefined,
    })
    localStorage.setItem('auth-token', '')
  }
  return(
    <Router>
      <UserContext.Provider value={{userData, setUserData}}>
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
              {userData.user ? (
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
      </UserContext.Provider>
    </Router>
  )
}





export default App
