var xkcd = require('./xkcd-api');

var argv = require('minimist')(process.argv.slice(2));

if ((argv.r != null && argv.r === true) || (argv.random != null && argv.random === true) || (argv._.indexOf('random') >= 0)) {
  xkcd.random(function(error, body) {
    if (error) {
      console.error(error)
    } else {
      console.log(body);
    }
  });
} else if ((argv.l != null && argv.l === true) || (argv.latest != null && argv.latest === true) || (argv._.indexOf('latest') >= 0)) {
  xkcd.latest(function(error, body) {
    if (error) {
      console.error(error)
    } else {
      console.log(body);
    }
  });
} else if ((argv.n != null && argv.n === parseInt(argv.n, 10))) {
  xkcd.get(argv.n, function(error, body) {
    if (error) {
      console.error(error)
    } else {
      console.log(body);
    }
  });
} else if (argv.number != null && argv.number === parseInt(argv.number, 10)) {
  xkcd.get(argv.number, function(error, body) {
    if (error) {
      console.error(error)
    } else {
      console.log(body);
    }
  });
} else if (argv.n != null && argv.n != parseInt(argv.n, 10)) {
  console.error("Wrong usage.");
} else if (Object.keys(argv).length === 1 && argv._.length === 0) {
  xkcd.latest(function(error, body) {
    if (error) {
      console.error(error)
    } else {
      console.log(body);
    }
  });
}

module.exports = {
  get : function(number, callback) {
    xkcd.get(number, callback);
  },

  latest : function(callback) {
    xkcd.latest(callback);
  },

  random : function(callback) {
    xkcd.random(callback);
  }
}