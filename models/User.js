const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,     //공백 없애줌
        unique: 1       //중복 금지
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {                //유효성관리
        type: String
    },
    tokenExp: {             //토큰 유효기간
        type: Number
    }
})

const User = mongoose.model('User', userSchema)

module.exports = {}     //위에 User를 다른 곳에서도 쓸 수 있도록 exports