'use strict';

const knex = require('./knex-instance');

const bookshelf = require('bookshelf')(knex);
bookshelf.plugin('pagination');
bookshelf.plugin('visibility');

module.exports = bookshelf;
