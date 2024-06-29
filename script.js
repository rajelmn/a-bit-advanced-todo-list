let todo = document.getElementById('to-do');
let btn = document.getElementById('btn');
let inputvalue = document.getElementById('input-box')
let ul = document.querySelector('ul')
btn.onclick = function () {
   let li = document.createElement('li');
   let input = document.createElement('input');
   input.type = 'checkbox';
   let text = document.createElement('span');
   text.innerHTML = inputvalue.value;
   ul.appendChild(li).append(input, text)
};