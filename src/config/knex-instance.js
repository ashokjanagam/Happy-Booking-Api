'use strict';

const dbConfig = require('../../knexfile');
const knex = require('knex')(dbConfig[process.env.NODE_ENV || 'development']);

module.exports = knex;
