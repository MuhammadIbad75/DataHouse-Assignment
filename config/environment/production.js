'use strict';
// =================== //
// Production Settings //
// =================== //
module.exports = {
  mongo: {
    db_url: process.env.db_url,
    options:
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    debug: false,
  },
  client: `https://datahouseonBoarding.com`,
  server: `https://datahouseonBoarding.com`
};
