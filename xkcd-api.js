var request = require('request');

var HOST = "http://xkcd.com/"

module.exports = {
  getComic : function(number, callback) {
    getComic(number, callback);
  },

  getLatestComic : function(callback) {
    request.get({
      url     : HOST + '/info.0.json',
      json    : true
    }, function(error, response, body){
      if (error) {
        console.error("Request error: " + error);
        callback(error, null);
      } else {
        callback(error, body);
      }
    });
  },

  getRandomComic : function(callback) {
    request.get({
      url     : HOST + '/info.0.json',
      json    : true
    }, function(error, response, body){
      if (error) {
        console.error("Request error: " + error);
        callback(error, null);
      } else {
        var currentNumber = body.num;
        getComic(randomIntFromInterval(1, currentNumber), callback);
      }
    });
  }
}

function getComic(number, callback) {
  request.get({
    url     : HOST + number + '/info.0.json',
    json    : true
  }, function(error, response, body){
    if (error) {
      console.error("Request error: " + error);
      callback(error, null);
    } if (response.statusCode === 404) {
      callback("Comic does not exist. Yet.", body);
    } else if (response.statusCode !== 200) {
      callback(response.statusCode, body);
    } else {
      callback(error, body);
    }
  });
}

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}