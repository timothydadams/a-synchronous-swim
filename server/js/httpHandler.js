const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const http = require('http');
const keypressHandler = require('./keypressHandler');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////


let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

var rndOption = function(){
  optionIndex = Math.floor(Math.random() * 4)
  options = ['up', 'down', 'left', 'right'];
  return options[optionIndex];
};

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);

  if (req.method === 'OPTIONS') {
    res.writeHead(200, headers);
    res.end();
    next();
  }

  if (req.method === 'GET') {
    res.writeHead(200, headers);
    res.end(rndOption());
    next();
  }

  //next();
  //keypressHandler.initialize.bind(this, res.write);
  //res.end();
  // invoke next() at the end of a request to help with testing!q.url);
};