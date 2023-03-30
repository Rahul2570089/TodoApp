const TodoService = require('../services/todoservices');

exports.createTodo = async (req, res, next) => {
    try {
        const { userId, title, desc } = req.body;
        const todo = await TodoService.createTodo(userId, title, desc);
        res.json({ status: true, success: todo })

    } catch (error) {
        next(error)
        throw error;
    }
}

exports.getTodos = async (req, res, next) => {
    try {
        const { userId } = req.body;
        const todos = await TodoService.getTodos(userId);
        res.json({ status: true, success: todos })
    } catch (error) {
        next(error)
        throw error;
    }
}

exports.deleteTodo = async (req, res, next) => {
    try {
        const { todoId } = req.body;
        const result = await TodoService.deleteTodo(todoId);
        res.json({ status: true, success: result })

    } catch (error) {
        next(error)
        throw error;
    }
}

