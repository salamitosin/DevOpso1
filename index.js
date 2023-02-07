const express = require('express')
const app = express()


const appRoute = require ('./routes/router')
app.use(express.json());

app.get('/', (req, res) =>{
  res.send("Hello Route")
});
app.use('/api', appRoute);

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})