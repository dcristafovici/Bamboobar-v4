import React, {useState} from "react"
import axios from "axios"
const CreateProduct = () =>{

  const [form, setForm] = useState({
    name: "", price: "", weight: "", category: ""
  })
  const [file, setFile] = useState()

  const onChangeHandler = event => {
    setForm({...form, [event.target.name] : event.target.value})
  }
  const onAddFileHandler  = event =>{
    const fileOne = event.target.files[0]
    setFile(fileOne)
  }


  const onSubmitHandler = async(event) =>{
    const data = new FormData()
    const jsonForm = JSON.stringify(form)
    data.append("form", jsonForm)
    data.append("file", file)
    event.preventDefault()
    try{
      const response = await axios.post('/api/product/create', data)
      console.log(response, 'axios response')
      setForm({name: "", price: "", weight: "", productImage: "", category: ""})
    }
    catch (e) {
      console.log(e.response.data.message)
    }
  }
  return(
    <div className="create-product" encType="multipart/form-data">
      <form className="form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" onChange={onChangeHandler} required/>
        </div>
        <div className="form-group">
          <label>Price</label>
          <input type="number" name="price" onChange={onChangeHandler} required/>
        </div>
        <div className="form-group">
          <label>Weight</label>
          <input type="text" name="weight" onChange={onChangeHandler} required/>
        </div>
        <div className="form-group">
          <label>productImage</label>
          <input type="file" onChange={onAddFileHandler} name='productImage'/>
        </div>
        <div className="form-group">
          <label>Category</label>
          <input type="text" onChange={onChangeHandler} name="category"/>
        </div>
        <div className="form-group">
          <button className="button" onClick={onSubmitHandler}>
            <span>Send</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateProduct
