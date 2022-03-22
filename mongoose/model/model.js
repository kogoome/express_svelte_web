//@ts-check
const mongoose = require('mongoose')
const schema = require('./schema/0.index')
require('dotenv').config()

const db = mongoose.connection

// 커넥션 객체
const model = (() => {
  db.on('error', console.error)
  db.on('open', () => {
    console.log('몽구스 연결')
  })

  // 아틀라스 클러스터 > 디비 연결 (디비명은 env 파일 내 연결주소에 포함)
  mongoose
    // @ts-ignore
    .connect(process.env.DB_URL, {
      // 디비연결 사용 옵션들
      // useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: true,
    })
    .then(() => {
      console.log('22321expressDB 연결')
    })
    .catch((err) => console.log(err))

  // 스키마 가져와서 model 키밸류 배열값으로 리턴
  const model = {}
  for (let key in schema) {
    // @ts-ignore
    model[key] = mongoose.model(key, schema[key])
  }
  return model
})() // 함수 이후 ()붙이면 즉시실행함수로 익스포트하고 요청시마다 즉시실행

module.exports = model
