import React, {useEffect, useState} from "react"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import CreateProduct from "./components/product/CreateProduct";
import CreateCategory from "./components/category/CreateCategory";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login"
import axios from "axios"
import UserContext from "./context/userContext";
import './App.css';
import Account from "./pages/Account";



const App = () => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined
  })
  useEffect( ()=> {
    const checkLoggedIn  = async() => {
      let token = localStorage.getItem("auth-token")
      if(token === null){
        token = ""
      }

      const tokenResponse = await axios.post('/api/user/tokenIsValid', null, {headers: {"x-auth-token": token} })
      if(tokenResponse.data){
        const userRes = await axios.get('/api/user/getUser ', {headers: {"x-auth-token": token, "id": tokenResponse.data.data._id},})
        setUserData({
          token,
          user: userRes.data
        })
      }
    }

  checkLoggedIn()
  }, [])
  console.log(userData)
  const logOut = () =>{
    setUserData({
      token: undefined,
      user: undefined
    })
    localStorage.setItem("auth-token","");

  }
  return(
    <Router>
      <UserContext.Provider value={{ userData, setUserData}} >
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
                <div>Register Replace</div>
              ):
              (
                <li>
                  <Link to="/auth/register">Register</Link>
                </li>
              )}
              {userData.user ? (
                  <li><a href="#" onClick={logOut}>LogOut</a></li>
              ) :
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
      </UserContext.Provider>
    </Router>
  )
}



export default App
