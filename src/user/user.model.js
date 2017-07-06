'use strict';

const bookshelf = require('../config/bookshelf-instance');

module.exports = bookshelf.Model.extend({
  tableName : 'users',

  hidden: ['isDeleted'],

  setUserName(username) {
    this.set('username', username);
  },

  getUserName() {
    return this.get('username');
  },

  setPassword(password) {
    this.set('password', password);
  },

  getPassword() {
    return this.get('password');
  },

  setFirstName(firstName) {
    this.set('firstName', firstName);
  },

  getFirstName() {
    return this.get('firstName');
  },

  setLastName(lastName) {
    this.set('lastName', lastName);
  },

  getLastName() {
    return this.get('lastName');
  },

  setMailId(mailId) {
    this.set('mailId', mailId);
  },

  getMailId() {
    return this.get('mailId');
  },

  getDateCreated() {
    return this.get('dateCreated');
  },

  setDateCreated(dateCreated) {
    this.set('dateCreated', dateCreated);
  },

  isDeleted() {
    return this.get('isDeleted');
  },

  setDeleted(isDeleted) {
    this.set('isDeleted', isDeleted);
  }
});
