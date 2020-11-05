import React, {useState} from "react"

const CreateProduct = () =>{

  const [form, setForm] = useState({
    name: "", price: "", weight: "", productImage: "", category: ""
  })

  const onChangeHandler = event => {
    setForm({...form, [event.target.name] : event.target.value})
  }

  const onSubmitHandler = event =>{
    event.preventDefault()
    console.log(form)
  }
  return(
    <div className="create-product">
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
          <input type="text" onChange={onChangeHandler} name='productImage'/>
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
