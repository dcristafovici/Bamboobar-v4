const config = require('config')
const fetch = require('node-fetch')
const findAddress = async(req,res) => {
  try{
    const { address } = req.body
    let options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Token " + config.get('data_token'),
        "X-Secret": config.get('data_secret')
      },
      body: JSON.stringify([address])
    }

    fetch(config.get('data_url'), options)
      .then(response => response.text())
      .then(result => res.json(result))
      .catch(error => res.status(500).json({error: error.message}));
  } catch (err) {
    res.status(500).json({error: err.message})
  }
}


module.exports = {
  findAddress
}
