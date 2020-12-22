const findAddress = async(req,res) => {
  try{
    const { address } = req.body
    return res.json(address)
  } catch (err) {
    res.status(500).json({error: err.message})
  }
}


module.exports = {
  findAddress
}
