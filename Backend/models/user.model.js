const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [4, 'First name must be at least 4 characters long']
        },
        lastname: {
            type: String
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [4, 'Email must be at least 4 characters long']
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    socketId: {
        type: String
    }
});

// JWT Token Generate Function
userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id:this.id},process.env.JWT_SECRET)
    return token
};

// Password Compare Function
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// Password Hash Function
userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
};

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;
