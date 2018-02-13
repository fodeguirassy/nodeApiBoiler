module.exports = (app) => {
  const User = app.models.user;

  return function(req, res, next) {
    User.upsert(req.user)
      .then(function(result) {
        if (result) res.send(req.user);
      }).catch(error => {
        res.status(500).send(error)
      });
  }

}