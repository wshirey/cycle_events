exports.list = function(req, res) {
  res.render('events/list');
};

exports.create = function(req, res) {
  res.render('events/create');
};

exports.detail = function(req, res) {
  res.render('events/detail');
};
