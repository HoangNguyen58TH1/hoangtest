// function click_btn(){
//   // alert('Hoang Toni đã ghé thăm')
//   // document.getElementById('id_btn_click').innerHTML =   '123'
//   // document.getElementsByClassName('class_btn_click')[0].innerHTML = '123'

//     let x = document.getElementsByClassName('class_btn_click')
//     for (let i = 0; i < x.length; i++) {
//       x[i].innerHTML = 123;
//     }
// }


// function click_btn(){
//   let x = document.getElementsByClassName('class_btn_click')
//   for(let i = 0; i < x.length; i++){
//     x[i].innerHTML = Math.floor(Math.random()*101)
//   }
//   // document.getElementById('id_btn_click1').value = x[0].innerHTML
//   // document.getElementById('id_btn_click2').value = x[1].innerHTML
//   // document.getElementById('id_btn_click3').value = x[2].innerHTML
//   // document.getElementById('id_btn_click4').value = x[3].innerHTML

//   let y = document.getElementsByClassName('class_btn_click_input')
//   for (let i = 0; i < y.length; i++) {
//     y[i].value = x[i].innerHTML
//   }
// }


function click_btn() {
  let x = $('.class_btn_click')
  let y = $('.class_btn_click_input')
  for (let i = 0; i < x.length; i++) {
    x[i].innerHTML = y[i].value = Math.floor(Math.random() * 100001)
  }
}