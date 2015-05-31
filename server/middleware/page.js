module.exports = function() {
  return function pageMiddleware(req, res, next) {
    var app = req.app;
    var path = req.params[0];
    app.models.Page.find({where: {path: path}}, function(err, page) {
      if (!err) {
        if (page.length) {
          res.send(page[0].content);
        } else {
          next();
        }
      } else {
        res.status(500).send('Database problem.');
      }
    });
  }
};
