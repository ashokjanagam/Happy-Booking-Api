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

function getUser(id, activityId) {
  return User.where({ id, activityId, isDeleted: false }).fetch();
}

function createUser(activityId, userData) {
  const user = new User(userData);
  user.setDeleted(false);
  user.setDateCreated(new Date());
  return user.save()
}

function updateUser(id, updatedUserData) {

  return User.where({ id }).fetch()
    .then(currentUserData => {
      return currentUserData.save(updatedUserData, { patch: true });
    });
}

function deleteUser(id, activityId) {
  return User.where({ id, isDeleted: true });
}

function listUsers(activityId) {
  return User.where({ activityId, isDeleted: false }).fetchAll();
}

