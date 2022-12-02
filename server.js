require('dotenv').config();

const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const requestIp = require('request-ip');
const bodyParser = require('body-parser');
const config = require('./config/environment');

let app = express();

app.use(cors());
app.use(config.assets);
app.use(morgan('dev'));
app.use(requestIp.mw());
app.use(bodyParser.json({ limit: '10000mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

require('./routes')(app);
require('./config/webhooks');

app.listen(config['port'], () => console.log(`listening to ${config['port']}`));
