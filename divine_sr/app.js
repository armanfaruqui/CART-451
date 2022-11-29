const express = require('express')
const app = express()
const port = 3000
const myBayesianClass= require("./bayesian");

let myBayesianInstance = new myBayesianClass();


// Static Files
app.use(express.static(__dirname + '/public'));


app.get('', (req, res)=>{
    res.sendFile(__dirname + '/views/index.html')
})


// to hande the get request from client.js
app.use('/inputVars',handleInputVars);

function handleInputVars(request,response,next){
    console.log(request.url);
    console.log(request.query);
    //pass to the bayseian class/
    myBayesianInstance.setInput(request.query.paramOne);
    response.send("success");


   
  }



// Listen on port 3000
app.listen(port, () => console.info(`Listening on port ${port}`))

