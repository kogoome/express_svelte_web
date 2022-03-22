const mongoose = require('mongoose')

const Userdata = new mongoose.Schema({
  // 참조정보
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  // 유져데이터
  // 관리자 스키마 필요
  following: { type: Array },
  follower: { type: Array },
  article: { type: Array }, // 작성 게시물들
  likeArticle: { type: Array }, // 좋아요 누른 게시물들
  bookmark: { type: Array }, // 즐겨찾기 게시물들
  // 카운팅 데이터
  followingCount: { type: Number, default: 0 },
  followerCount: { type: Number, default: 0 },
  articleCount: { type: Number, default: 0 },
  likeCount: { type: Number, default: 0 },
  bookmarkCount: { type: Number, default: 0 },
  versionKey: false,
})

module.exports = Userdata