import React, {useState, useEffect} from "react";
import axios from "axios";
const AccountInfo = ({user}) => {
  const [data, setData] = useState({
    name: user ?  user.name : "",
    email: user? user.email : "",
    id: user ? user._id : ""
  })

  const onChangeHandler = (event) =>{
    setData({...data, [event.target.name]: event.target.value})
  }
  const onSubmitHandler = async(event) => {
    event.preventDefault()
    try{
      const response = await axios.post('/api/auth/update', data)
      console.log(response)
    } catch (err){
      console.log(err)
    }
  }

  useEffect(() => {
    if(user){
      setData({...data,
        id : user._id,
        name: user.name,
        email: user.email
      })
    }
  }, [user])

  return(
    <div className="account-item">
      <div className="account-item__name">Личные данные</div>
      <div className="account-item__vertical">
        <div className="account-item__info">
          <ul>
            <li>
              <span>Имя:</span>
              <input type="text" onChange={onChangeHandler} name={'name'} defaultValue={(user ? user.name : "")}/>
            </li>
            <li>
              <span>Email:</span>
              <input type="text"  onChange={onChangeHandler} name={'email'}  defaultValue={(user ? user.email : "")}/>
            </li>
            <li className={'notedit'}>
              <span>Телефон:</span>
              <input type="text" defaultValue={(user ? user.phone : "")}/>
            </li>
          </ul>
        </div>
        <div className="account-item__button">
          <button className="button button-gray" onClick={onSubmitHandler}><span>Редактировать</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AccountInfo
