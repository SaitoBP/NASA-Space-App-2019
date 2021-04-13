const express = require('express')
const PORT = process.env.PORT || 5000

express()
  .use(express.static('public'))
  .get('/', (req, res) => res.sendFile('public/index.html'))
  .listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`))
