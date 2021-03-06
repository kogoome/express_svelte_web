// 작성 기준 출처 : https://youtu.be/6FOq4cUdH8k?t=4055

const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

// Load User Model 
const model = require('../mongoose/model/model')
const UserModel = model.User

// passport 인증 함수
const pp = (passport) => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email', // input name="email"
        passwordField: 'password',
        session: true, // 로그인세션 저장여부
        passReqToCallback: false, // 기타 입력값에 대해 req.body로 검증할지 여부
      },// 로컬전략 셋팅해놓고
      (email, password, done) => {
        // Match User
        UserModel.findOne({ email: email })
          .then((user) => {
            // 유져정보가 없을 시
            if (!user) {
              return done(null, false, {
                message: 'that email is not registered',
              })
            }
            // Match password
            bcrypt.compare(password, user.hashedPassword, (err, isMatch) => {
              if (err) throw err
              if (!isMatch) {
                return done(null, false, { message: 'that password incorrect' })
              } else {
                return done(null, user)
              }
            })
          })
          .catch((err) => console.log(err))
      }
    )
  )

  passport.serializeUser((user, done) => {
    done(null, user.email)
  })

  passport.deserializeUser((email, done) => {
    UserModel.findOne({ email: email }, (err, user) => {
      done(err, user)
    })
  })
}

module.exports = pp
