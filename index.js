const { response } = require('express');
const express = require('express');
const path =require('path');
const app = express();
const port = 3500;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "public", 'index.html'))

})

app.get('/index.css', (req, res) => {
  res.sendFile(path.join(__dirname, "public", 'index.css'))

})

app.get('/script.js', (req, res) => {
  res.sendFile(path.join(__dirname, "public", 'script.js'))

})

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, "public", 'login.html'))

})


app.get('/getLength', function(req, res) {
  console.log(req.query);
  var reqJsonFname = req.query.fname;
  var result = JSON.stringify({fname:reqJsonFname, lenght:reqJsonFname.length});
  console.log("Sending  : " + result);
  res.send(result);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})