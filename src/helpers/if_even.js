// Example file src/helpers/bold.js
module.exports = function(conditional, count, options) {
  if((conditional % count) == 0) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }

  
}