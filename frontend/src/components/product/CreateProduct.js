import React, {useState} from "react"
import axios from "axios"
const CreateProduct = () =>{

  const [form, setForm] = useState({
    name: "", price: "", weight: "", productImage: "", category: ""
  })

  const onChangeHandler = event => {
    setForm({...form, [event.target.name] : event.target.value})
  }



  const onSubmitHandler = async(event) =>{
    event.preventDefault()
    try{
      const data = await axios.post('/api/product/create', form)
      console.log(data.data.message)
      setForm({name: "", price: "", weight: "", productImage: "", category: ""})
    }
    catch (e) {
      console.log(e.response.data.message)
    }
  }
  return(
    <div className="create-product">
      <form className="form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" defaultValue={form.name} onChange={onChangeHandler} required/>
        </div>
        <div className="form-group">
          <label>Price</label>
          <input type="number" name="price" defaultValue={form.price} onChange={onChangeHandler} required/>
        </div>
        <div className="form-group">
          <label>Weight</label>
          <input type="text" name="weight" defaultValue={form.weight} onChange={onChangeHandler} required/>
        </div>
        <div className="form-group">
          <label>productImage</label>
          <input type="text" defaultValue={form.productImage} onChange={onChangeHandler} name='productImage'/>
        </div>
        <div className="form-group">
          <label>Category</label>
          <input type="text" onChange={onChangeHandler} defaultValue={form.category} name="category"/>
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
