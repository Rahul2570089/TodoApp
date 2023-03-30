const mongoose = require('mongoose')
const db = require('../config/db')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

UserSchema.pre('save', async function () {
    try {
        var user = this;
        const salt = await bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hashSync(user.password, salt);
        user.password = hashedPassword;
    } catch (error) {
        throw error
    }
})

UserSchema.methods.isValidPassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password)
    } catch (error) {
        throw error
    }
}


const UserModel = db.model('User', UserSchema)

module.exports = UserModel
