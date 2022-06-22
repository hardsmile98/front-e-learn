const express = require('express');
const cors = require('cors');
const endpoints = require('./endpoints/index');

const app = express();

const corsOptions = {
    credentials: true,
    origin: true,
};
app.use(cors(corsOptions));
  

const port = process.env.PORT || 8080;

endpoints.forEach(endpoint => {
    endpoint.json = endpoint.data ? require(`./data/${endpoint.data}`) : {};
    app[endpoint.method || 'get'](endpoint.path, (req, res) => {
        const data = endpoint.json;
        setTimeout(() => { res.send(data); }, 500);
    });
  });


app.listen(port, function() {
    console.log('Server listening on port ' + port)
})