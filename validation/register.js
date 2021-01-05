const Validator = require('validator')
const ISEmpty = require('is-empty')
module.exports = function validateRegiterInput(data) {

  let errors = {}
  data.email = !Validator.isEmpty(data.email) ? data.email : ""
  data.password = !Validator.isEmpty(data.password) ? data.password : ""

  data.passwordCheck = !Validator.isEmpty(data.passwordCheck) ? data.passwordCheck : ""

  data.phone = !Validator.isEmpty(data.phone) ? data.phone : ""

  data.username = !Validator.isEmpty(data.username) ? data.username : "d"


  data.address = !Validator.isEmpty(data.address) ? data.address : ""

  // Email
  if(Validator.isEmpty(data.email)){
    errors.email = "Укажите адрес электронной почты"
  } else if(!Validator.isEmail(data.email)){
    errors.email = 'Укажите правильно адресс электронной почты'
  }

  // Password
  if(Validator.isEmpty(data.password)){
    errors.password = 'Укажите пароль'
  }
  if(!Validator.isLength(data.password , {min: 6, max: 25})){
    errors.password = 'Пароль должен иметь длину от 6 до 25 символов'
  }

  //  passwordCheck
  if(Validator.isEmpty(data.passwordCheck)){
    errors.passwordCheck = 'Подтвердите пароль'
  }
  // Check Equals Passwords
  if(!Validator.equals(data.password, data.passwordCheck)){
    errors.passwordCheck = "Пароли не совпадают"
  }

  return{
    errors,
    isValid: ISEmpty(errors)
  }

}
