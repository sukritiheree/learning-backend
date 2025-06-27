const express = require('express')
const app = express()
const port = 3000
//middleware1
app.use((req, res, next)=> {
  
//   res.send("middlewre1")
  console.log(`${Date.now()} is a ${req.method}`)
  next()
})
//middleware2
app.use((req, res, next)=> {
  console.log('m2')
  next()
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000)