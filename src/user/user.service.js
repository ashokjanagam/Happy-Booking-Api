'use strict';
const User = require('./user.model');

const service = {
  listUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
};

module.exports = service;

function getUser(id) {
  return User.where({'id':id, isDeleted: false }).fetch();
}

function createUser(userData) {
  const user = new User(userData);
  user.setDeleted(false);
  user.setDateCreated(new Date());
  return user.save()
}

function updateUser(id, updatedUserData) {

  return User.where({id }).fetch()
    .then(currentUserData => {
      return currentUserData.save(updatedUserData, { patch: true });
    });
}

function deleteUser(id) {
  return User.where({ 'id': id }).fetch()
    .then(currentUser =>{
      return currentUser.save({ isDeleted: true });
    });
}

function listUsers() {
  return User.where({isDeleted: false }).fetchAll();
}

