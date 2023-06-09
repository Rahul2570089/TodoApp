const db = require('../config/db');
const mongoose = require('mongoose');
const UserModel = require('../model/usermodel');

const { Schema } = mongoose;

const todoSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: UserModel.modelName
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    desc: {
        type: String,
        required: true,
        trim: true,
    }
});

const Todo = db.model('todo', todoSchema);
module.exports = Todo;
