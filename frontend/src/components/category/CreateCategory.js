import React, {useState} from "react"
import axios from "axios";

const CreateCategory = () =>{
  const [category, setCategory] = useState({
    name: ""
  })
  const onChangeHandler = event => {
    setCategory({...category, [event.target.name]: event.target.value})
    console.log(category)
  }
  const onSubmitHandler = async(event) =>{
    console.log('click')
    event.preventDefault()
    try{
      const response = await axios.post('/api/category/create', category)
      console.log(response, 'axios response')
      setCategory({name: ""})
    } catch (e) {
      console.log(e.response.message)
    }

  }
  return(
    <div className='create-category'>
      <h1>Create Category</h1>
      <form  className="form">
        <div className="form-group">
          <label>Названия категории</label>
          <input type="text" defaultValue={category.name}   name="name" onChange={onChangeHandler}/>
        </div>
        <div className="form-group">
          <button className="button" onClick={onSubmitHandler}>
            <span>Создать</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateCategory
