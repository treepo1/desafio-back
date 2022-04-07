const express = require ('express');
const router = express.Router();

const LoginController = require('./controllers/LoginController');

router.get('/users', LoginController.searchAll);
router.get('/userById/:id', LoginController.searchUserById);
router.post('/login', LoginController.login)
router.post('/user', LoginController.insertUser);
router.put('/user/:id', LoginController.updateUser);
router.delete('/user/:id', LoginController.deleteUser);


module.exports = router;
