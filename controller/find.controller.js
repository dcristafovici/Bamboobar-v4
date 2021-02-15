const axios = require('axios')
const findController = (req, res) => {
  try{
    let { coords, bamboo } = req.body
    coords = coords.reverse()
    bamboo = bamboo.reverse()
    const data = JSON.stringify({
      "route": [bamboo, coords],
      "skip_estimated_waiting": true,
      "supports_forced_surge": false,
    })

    const config = {
      method: "POST",
      url: "https://taxi.yandex.ru/3.0/routestats",
      headers: {
        'Content-Type': 'application/json',
      },
      data: data
    }

    axios(config)
      .then(function (response) {
        res.status(200).json(response.data)
      })
      .catch(function (error) {
        res.status(401).json(error)
      });


  } catch (err){
    res.status(500).json({err: err.message})
  }
}

module.exports = {
  findController
}
