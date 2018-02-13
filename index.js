const app = require('express')();
require('./settings')(app);
require('./database')(app);
require('./models')(app);
require('./middleware')(app);
require('./passport')(app);
require('./boot')(app);
require('./action')(app);
require('./route')(app);


app.listen(app.settings.host.port);
console.log(`${app.settings.host.name} is listening on port ${app.settings.host.port}`)