const router = require('express').Router();

module.exports = (app) => {

  router.get('/',
    app.actions.user.findAll
  );
  return router;
}