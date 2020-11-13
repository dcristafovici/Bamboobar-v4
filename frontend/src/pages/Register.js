import React, {useState, useContext} from "react"
import axios from "axios"
const Register = () =>{

  const [form, setForm] = useState({
    email: "", username: "", password: "", passwordCheck: ""
  })


  const onChangeHandler = event => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const onSubmitHandler = async(event) => {
    event.preventDefault()
    const email = form['email']
    const password = form['password']
    const registerResponse = await axios.post('/api/user/register', form)
    // if(registerResponse.status == 200){
    //
    //   const loginResponse = await axios.post('/api/user/login', {email, password})
    //   if(loginResponse.status == 200) {
    //     localStorage.setItem("auth-token", loginResponse.data.token)
    //     setUserData({
    //       token: loginResponse.data.token,
    //       user: loginResponse.data.user
    //     })
    //   }
    // }
  }

  return(
    <div className="register-page">
      <div className="title">
        <h1>Register Page</h1>
      </div>
      <form className="register-form">
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" onChange={onChangeHandler} />
        </div>
        <div className="form-group">
          <label>Username</label>
          <input type="text" name="username" onChange={onChangeHandler} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" onChange={onChangeHandler}/>
        </div>
        <div className="form-group">
          <label>Repeat password</label>
          <input type="password" name="passwordCheck" onChange={onChangeHandler} />
        </div>
        <div className="form-group">
          <button className="button" onClick={onSubmitHandler}>
            <span>Регистрация</span>
          </button>
        </div>

      </form>
    </div>

  )
}


export default Register
