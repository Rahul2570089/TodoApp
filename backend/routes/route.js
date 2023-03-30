const router = require('express').Router();
const UserController = require('../controller/usercontroller');
const TodoController = require('../controller/todocontroller');

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.post('/addTodo', TodoController.createTodo);
router.post('/getTodoList', TodoController.getTodos);
router.post('/deleteTodo', TodoController.deleteTodo);

module.exports = router;
