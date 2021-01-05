const jwt = require('jsonwebtoken')
const config = require('config')

const auth = async(req, res, next) => {
  try{
    const token = req.header('x-auth-token')
    if(!token){
      return res
        .status(404)
        .json({msg: "Доступ запрещен, отсуствует токен"})
    }
    const verified = jwt.verify(token, config.get("JWT_SECRET"))
    if(!verified){
      return res
        .status(404)
        .json({msg: "Невалидный токен, доступ запрещен"})
    }
    req.user = verified.id
    next()
  } catch (err) {
    return res
      .status(500)
      .json({error: err.message})
  }
}

module.exports = auth
