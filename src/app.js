// @ts-check
const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const morgan = require('morgan')
const { loginCheck } = require('./middlewares')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('tiny'))

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', './src/views')
app.set('view engine', 'pug')




// 패스포트 기본셋팅
// const passport = require('passport')
// const session = require('express-session')
// app.use(session({ secret: '세션비번', resave: false, saveUninitialized: false }))
// app.use(passport.initialize())
// app.use(passport.session())
// require('../config/passport')(passport)

// welcome page
// 이게 어떻게 스벨트와 연동되는거지?
// app.get('/', (req, res) => {
//   res.render('signin')
// })

app.use('/signin', require('./routes/acount'))

// 로그인 인증 페이지 (시작페이지)
// app.post(
//   '/',
//   // 패스포트 인증
//   passport.authenticate('local', {
//     // 로컬 방식으로 인증
//     failureRedirect: '/acount/signin-fail', // TODO 로그인 실패 페이지구성
//   }),
//   (req, res) => {
//     // res.render('index.ejs', { user: req.user })
//     res.redirect('/article') // 메인페이지로 바로이동
//   }
// )

// 라우터 연결
// app.use('/acount', require('../routes/acount'))


module.exports = app