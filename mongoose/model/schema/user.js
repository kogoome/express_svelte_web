const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const User = new mongoose.Schema({
  // 로그인정보
  email: { type: String, required: true, unique: true },
  id: { type: String, required: true, unique: true },
  nickname: { type: String, required: true },
  userInfo: { type: String, default: '' },

  hashedPassword: { type: String, required: true },

  profileImgKey: {
    type: String,
    default:
      'https://image-upload-server1.s3.ap-northeast-2.amazonaws.com/user.jpg',
  },

})

User.plugin(passportLocalMongoose)

module.exports = User
