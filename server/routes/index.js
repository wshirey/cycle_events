
/*
 * GET home page.
 */

module.exports = function(app) {
  require('./main')(app);
  require('./events')(app);
};
