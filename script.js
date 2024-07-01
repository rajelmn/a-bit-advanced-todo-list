
let todo = document.getElementById('to-do');
let btn = document.getElementById('btn');
let inputvalue = document.getElementById('input-box')
let ul = document.querySelector('ul')

let arr = []
let i = 0;

btn.addEventListener('click', () => {
    if(inputvalue.value) {
   let li = document.createElement('li');
   let input = document.createElement('input');
   input.type = 'checkbox';
   let text = document.createElement('span');
   text.innerHTML = inputvalue.value;
   ul.appendChild(li).append(input, text);
   arr.push(text.innerHTML)
   inputvalue.value = ''
   
   arr.forEach( (a) => localStorage.setItem(`value${i++}`, a) )
  }

})

window.addEventListener('load', () => {
     for(let i = 0; i < localStorage.length; i++) {
          let li = document.createElement('li');
          let span = document.createElement('span');
          let input = document.createElement('input')
          input.type = 'checkbox';
          span.textContent = localStorage.getItem(`value${i}`);
          ul.appendChild(li).append(input, span)
     }
})
