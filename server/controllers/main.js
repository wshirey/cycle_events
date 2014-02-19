exports.about = function(req, res) {
  res.render('index', { title: 'About' });
};

exports.signin = function(req, res) {
  res.render('index', { title: 'Sign In' });
};

exports.news = function(req, res) {
  res.render('index', { title: 'News' });
}
