const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const productRoute = require("./routes/product.routes.js")
const app = express()

//middleware

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use("/api/products", productRoute);



app.get('/',(req, res) =>{
    res.send("Hello world , I am Elias fclerom Haramaya University");
})


mongoose.connect(
  "mongodb+srv://admin:1234@backenddb.1dlgjfz.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDB"
).then(() =>{
    console.log("Connected to database");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
}).catch(() =>{
    console.log("Connection failed");
});


