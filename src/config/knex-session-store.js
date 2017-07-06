'use strict';

const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);
const knex = require('./knex-instance');

const store = new KnexSessionStore({
  knex: knex
});

module.exports = store;
