let btn = document.querySelector('.btn')
let ul = document.querySelector('.uls')

btn.addEventListener('click',()=>{
  window.print()
})

let itlc=[]

for (let i = 0; i < 4; i++) {
  var list = document.createElement('li')
  let is = document.createElement('i')

  itlc.push(is)
  list.append(is)
  ul.append(list)

}

itlc.map((item,index,arr)=>{
  arr[0].className= "fas fa-book"
  arr[1].className= "fas fa-gamepad"
  arr[2].className= "fas fa-music"
  arr[3].className= "fab fa-pagelines"
})
