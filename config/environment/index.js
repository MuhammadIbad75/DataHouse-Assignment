'use strict';

const ip = require('ip');
const _ = require('lodash');
const path = require('path');
const aws = require('aws-sdk');
const express = require('express');

process.env.IP = ip.address();
const port_no = process.env.PORT || 3000;
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.jwtSecret = '$2a$06$GXmQiERBvYRGD91bIJLWRO2m4WGUpj7IRuSuve3pZ3B5rRtLIzm2G';

aws.config.update({
  region: process['env']['AWS_REGIONS'],
  accessKeyId: process['env']['AWS_KEY'],
  secretAccessKey: process['env']['AWS_SECRET']
});

// console.log('env process emails', process.env.EMAILS);

const all = {
  env: process.env.NODE_ENV,
  // Frontend path to server

  assets: express.static(__dirname + '/../../../website/public'),
  view: path.normalize(__dirname + '/../../../website/public/index.html'),


  // Server port
  port: process.env.PORT || 4000,

  db_url: process.env.db_url,
  // Server IP
  ip: process.env.IP || '0.0.0.0',

  // Should we populate the DB with sample data ?
  seedDB: true,

  secrets: { session: 'Softtik_s3cr3t_2018' },
  userRoles: ['user', 'admin'],

  thisdomain: `http://${ip.address()}:${port_no}`,

  project_name: 'DataHouse',
  support_title: 'DataHouse Support',
  support_email: 'info@datahouse.com',
  to_emails: ['info@datahouse.com'],
  mail_footer: 'The Datahouse Team',
  mail_from_email: 'info@datahouse.com',
  mail_from_name: 'Datahouse',

  pepper: '78uA_PPWPO&@$',
  encPass: 's1XrWeMWPO',
  rpc_secret: "4b8cf527ePOQOpwsdafe",
};

/* Export the config object based on the NODE_ENV */
/*================================================*/

module.exports = _.merge(all, require(`./${process.env.NODE_ENV}.js`) || {}, require(`./const.js`));
