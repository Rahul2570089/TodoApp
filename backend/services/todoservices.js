const TodoModel = require('../model/todomodel');

class TodoService {
    static async createTodo(userId, title, desc) {
        try {
            const todo = new TodoModel({ userId, title, desc });
            const result = await todo.save();
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getTodos(userId) {
        try {
            return await TodoModel.find({ userId });
        } catch (error) {
            throw error;
        }
    }

    static async deleteTodo(todoId) {
        try {
            return await TodoModel.findOneAndDelete({_id: todoId});
        } catch (error) {
            throw error;
        }F
    }
}

module.exports = TodoService;