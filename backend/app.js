import express from "express";
import productRoute from "./routes/product.route.js";

const app = express()

app.get('/', function (req, res) {
  res.send('Hello')
})

app.use('/product', productRoute)

app.listen(3000)