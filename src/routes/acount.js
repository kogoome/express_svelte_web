const { Router } = require('express')
const { User } = require('../../mongoose/controller/0.index')

const router = Router()

// 회원정보 읽기
router.get('/', async (req, res) => {
  // 요청 읽기 작업
  console.log("라우터 읽기 작동")
  res.status(200)
})

// 회원가입
router.post('/', async (req, res) => {

})

module.exports = router
