export
default (req, res, next) => {

  if (req.isAuthenticated()) {
    return next();
  }

  res.status(401).send({
    success: false,
    message: 'User is not logged in'
  })

}