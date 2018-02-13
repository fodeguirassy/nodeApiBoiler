module.exports = (app) => {

  const User = app.models.User;
  const Picture = app.models.Picture;

  return (req, res) => {
    User.findOne({
        where: {
          email: req.user.email
        },
        include: [{
          model: Picture
        }]
      })
      .then(user => {
        res.send(user)
      })
  }
}