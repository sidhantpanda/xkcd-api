var xkcd = require('./xkcd-api');

var argv = require('minimist')(process.argv.slice(2));

if ((argv.r != null && argv.r === true) || (argv.random != null && argv.random === true) || (argv._.indexOf('random') >= 0)) {
  xkcd.getRandomComic(function(error, body) {
    if (error) {
      console.error(error)
    } else {
      console.log(body);
    }
  });
} else if ((argv._.indexOf('latest') >= 0) || (argv.latest != null && argv.latest === true)){
  xkcd.getLatestComic(function(error, body) {
    if (error) {
      console.error(error)
    } else {
      console.log(body);
    }
  });
} else if ((argv.n != null && argv.n === parseInt(argv.n, 10)) || (argv.number != null && argv.number === parseInt(argv.n, 10))) {
  xkcd.getComic(argv.n, function(error, body) {
    if (error) {
      console.error(error)
    } else {
      console.log(body);
    }
  });
} else if (argv.n != null && argv.n != parseInt(argv.n, 10)) {
  console.error("Wrong usage.");
}

module.exports = {
  getComic : function(number, callback) {
    xkcd.getComic(number, callback);
  },

  getLatestComic : function(callback) {
    xkcd.getLatestComic(callback);
  },

  getRandomComic : function(callback) {
    xkcd.getRandomComic(callback);
  }
}