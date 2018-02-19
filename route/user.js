const router = require('express').Router();

module.exports = (app) => {

  router.get('/',
    app.actions.user.findAll
  );

  router.post('/',
      app.middleware.controller.Local,
      app.actions.auth.registerWithLocal
  )

    return router;
}