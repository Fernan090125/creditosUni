const express = require('express')
const cors = require('cors')
const app = express()
require('./dbmongo');

// settings
app.set('port', process.env.PORT || 3200)

// middleware
app.use(express.json());
app.use(cors())
// routes
app.use(require('./routes/user_routes'))
app.use(require('./routes/credit_routes'))

app.get('/', (req, res)=>{
  res.json('Welcome to  API')
})

// Starting server
app.listen(3200, ()=>{
  console.log('server on port', app.get('port'))
})