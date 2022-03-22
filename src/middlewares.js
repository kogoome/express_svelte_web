// 로그인 체크
const loginCheck = (req, res, next) => {
  if (req.user) {
    console.log('사용자 로그인 확인.')
    // console.log('function loginCheck req.user : ', req.user, '확인')
    next()
  } else {
    console.log('로그인 정보가 없습니다. 로그인페이지로 갑니다.')
    res.render('signin.pug')
  }
}

module.exports = {
  loginCheck,
}
