const findAddress = async(req,res) => {
  try{
    console.log(address)
  } catch (err) {
    res.status(500).json({error: err.message})
  }
}


module.exports = {
  findAddress
}
