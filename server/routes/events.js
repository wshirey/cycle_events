var ctrl = require('../controllers/events.js');

module.exports = function(app) {
  app.get('/', ctrl.list);
  app.get('/event', ctrl.detail);
  app.get('/event/new', ctrl.create);
};
