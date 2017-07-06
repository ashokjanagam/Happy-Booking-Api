const express = require('express');
const userService = require('./user.service.js');

const router = express.Router({ mergeParams: true });

router.route('/')

  .get(listUsers)
  .post(createUser);
router.route('/:id')
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;

function listUsers (req, res, next) {
  userService.listUsers(req.params.activityId)
    .then(achievements => res.json(achievements))
    .catch(error => next(error));
}

function createUser(req, res, next) {
  userService.createUser(req.params.activityId, req.body)
    .then(savedAchievement => res.json(savedAchievement))
    .catch(error => next(error));
}

function getUser(req, res, next) {
  userService.getUser(req.params.id, req.params.activityId)
    .then(activity => res.json(activity))
    .catch(error => next(error));
}

function updateUser(req, res, next) {
  userService.updateUser(req.params.id, req.params.activityId, req.body)
    .then(updatedAchievement => res.json(updatedAchievement))
    .catch(error => next(error));
}

function deleteUser(req, res, next) {
  userService.deleteUser(req.params.id, req.params.activityId)
    .then(deletedAchievement => res.json(deletedAchievement))
    .catch(error => next(error));
}
