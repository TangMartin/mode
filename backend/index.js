import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import axios from "axios";
import fs from "fs";
import FormData from "form-data";

const API_KEY = 'YOUR API KEY GOES HERE';
const app = express()
let encodeUrl = bodyParser.urlencoded({ extended: false })



var multipart = require('connect-multiparty')
var multipartmiddleware = multipart();

app.get("/", (_, res) => {
  res.send("Hello Mode!");
});

app.post('/post', (req, res) => { 
  
  
  // axios
  var data = new FormData();
  data.append('allowPlatformToOperateToken', req.body.allowPlatformToOperateToken);
  data.append('chain', req.body.chain);
  data.append('recipientAddress', req.body.recipientAddress);
  data.append('filePath', fs.createReadStream(req.files.filePath.path));
  data.append('name', req.body.name);
  data.append('description', req.body.description);
  
  var config = {
    method: 'post',
    url: 'https://api.verbwire.com/v1/nft/mint/quickMintFromFile',
    headers: { 
      'X-API-Key': API_KEY, 
      ...data.getHeaders()
    },
    data : data
  };
  
  console.log("data",data);
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    res.send(JSON.stringify(response.data))
  })
  .catch(function (error) {
    console.log(error);
  });
  
  })



app.listen(port, () => {
  console.log(`Mode backend listening on port ${port}`);
});