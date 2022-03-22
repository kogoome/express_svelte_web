const text = (e) => {
  const div = e.target
  m1 = div.innerText.match(/^#{1,6}/)
  m2 = div.innerHTML.match(/<div.*div>/)

  // 문장 스타일 변환
  if (e.data == " " && m1 != null) {
    div.setAttribute("class", `h${m1[0].length}`)
    div.innerText = div.innerText.slice(m1[0].length + 1)
  }

  // 엔터 : div 삽입
  if (m2 != null) {
    console.log(m1)
    console.log(m2)
    div.innerHTML = div.innerHTML.replace(m2[0], "")

    const newdiv = document.createElement('div')
    newdiv.setAttribute('contenteditable', 'true')
    newdiv.setAttribute('oninput', 'text(event)')
    newdiv.setAttribute('onkeydown', 'keydown(event)')
    newdiv.setAttribute('onclick', 'clickk(event)')
    div.parentElement.insertBefore(newdiv, div.nextSibling)
    newdiv.focus()
  }
}

const keydown = (e) => {
  const div = e.target
  // 현재 칸 내용 콘솔 로그
  if (e.key == "`") {
    console.log(div.innerHTML)
  }
  // 방향키로 칸이동
  if (e.shiftKey == false && e.key == "ArrowUp" && div.previousSibling != null) {
    div.previousSibling.focus()
  }
  if (e.shiftKey == false && e.key == "ArrowDown" && div.nextSibling != null) {
    div.nextSibling.focus()
  }
  // 문장 스타일 변환 단축키
  if (e.ctrlKey == true && e.shiftKey == true) {
    if (e.key == '!') {
      div.setAttribute('class', 'h1')
    } else if (e.key == '@') {
      div.setAttribute('class', 'h2')
    } else if (e.key == '#') {
      div.setAttribute('class', 'h3')
    }
    // latex 삽입기능
    else if (e.key == '$') {
      const img = document.createElement('img')
      img.setAttribute('src', `http://latex.codecogs.com/png.latex?\\dpi{150}\\bg_white ${div.innerHTML} `)
      // 현재 div 태그 앞에 이미지 태그 넣기
      div.parentElement.insertBefore(img, div)
      div.innerHTML = ""
    }
  }
}

const clickk = (e) => {
  const div = e.target
  div.focus()
}

const modify = (e) => {
  const button = e.target
  const divlist = document.querySelectorAll('div')

  if (button.innerText == "편집모드off") {
    button.innerText = "편집모드on"
    button.style.backgroundColor = "#F00"
    divlist.forEach(div => div.setAttribute('contenteditable', 'true'))
  } else {
    button.innerText = "편집모드off"
    button.style.backgroundColor = "#000"
    divlist.forEach(div => div.setAttribute('contenteditable', 'false'))
  } 
}

