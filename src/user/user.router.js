const express = require('express');
const userService = require('./user.service.js');

const router = express.Router({ mergeParams: true });

router.route('/')

  /*  For get URL
   *  http://localhost:3000/user
   *  Input message from POSTMAN API should be something like below
   *   {
   *    "id": 1,
   *   "username": "Ashok Janagam",
   *    "password": "Ashok123",
   *    "firstName": "firstName",
   *    "lastName": "lastName",
   *    "mailId": "ashok.janagam@gmail.com",
   *    "dateCreated": "2017-07-05T18:30:00.000Z"
   *    }
   *
   */
  .get(listUsers)

  /*  For post URL
   *  http://localhost:3000/user
   *  Input message from POSTMAN API should be something like below
   *   {
   *    "id": 1,
   *   "username": "Ashok Janagam",
   *    "password": "Ashok123",
   *    "firstName": "firstName",
   *    "lastName": "lastName",
   *    "mailId": "ashok.janagam@gmail.com",
   *    "dateCreated": "2017-07-05T18:30:00.000Z"
   *    }
   *
   */
   .post(createUser);

router.route('/:id')
  /* To get the single user
  * URL should be like http://localhost:3000/user/1
  * */
  .get(getUser)


  /* To Update(put) the user
   * URL :http://localhost:3000/user/1
   *  {
   * "username":"Ashok Janagam Updated",
   * "password" :"Ashok123",
   * "firstName" :"firstName",
   * "lastName":"lastName",
   * "mailId":"ashok.janagam@gmail.com"
   }
   * */
  .put(updateUser)

  /* To Delete a record (Its a soft delete)
  * http://localhost:3000/user/1*/
  .delete(deleteUser);

module.exports = router;

function listUsers (req, res, next) {
  userService.listUsers()
    .then(users => res.json(users))
    .catch(error => next(error));
}

function createUser(req, res, next) {
  userService.createUser(req.body)
    .then(response => {
      console.log('response ',response);
      res.json(response)
    })
    .catch(error => next(error));
}

function getUser(req, res, next) {
  userService.getUser(req.params.id)
    .then(user => res.json(user))
    .catch(error => next(error));
}

function updateUser(req, res, next) {
  userService.updateUser(req.params.id, req.body)
    .then(updatedUser => res.json(updatedUser))
    .catch(error => next(error));
}

function deleteUser(req, res, next) {
  userService.deleteUser(req.params.id)
    .then(deletedUser => res.json(deletedUser))
    .catch(error => next(error));
}
