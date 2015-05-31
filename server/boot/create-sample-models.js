module.exports = function(app) {
  app.dataSources.mysqlDs.automigrate('Page', function(err) {
    if (err) throw err;

    app.models.Page.create([
      {path: '/', title: 'Homepage', content: '<p>Hello World. <a href="/foobar">link</a></p>'},
      {path: '/foobar', title: 'Test page', content: '<h1>Foobar</h1><p>Lorem ipsum</p>'}
    ], function(err, pages) {
      if (err) throw err;

      console.log('Models created: \n', pages);
    });
  });
};
