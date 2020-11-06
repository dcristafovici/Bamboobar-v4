const jwt = require('jsonwebtoken')
const config = require('config')
const jwtSecret = config.get('JWT_SECRET')

const auth = async(req,res, next) =>{
  try{
    const token = req.header("x-auth-token");
    if(!token){
      return res.status(401).json({error: "Нету токена"})
    }

    const verified = jwt.verify(token, jwtSecret)
    if(!verified){
      return res.status(401).json({error: "Проверка токена не удалась"})
    }

    req.user = verified.id
    next()

  } catch (e) {
    res.status(500).json({error: e.message})
  }
}
