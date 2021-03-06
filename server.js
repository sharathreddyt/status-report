//Install express server
const express = require('express');
const path = require('path');

const app = express();
const port = process.env === 'production' ? 8080 : 4000;
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/status-report'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/status-report/index.html'));
});
console.log(port,process.env.PORT);
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || port);
