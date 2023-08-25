let button = document.getElementById('button');
const text = document.getElementById('tex');
const para = document.getElementById('para');
button.addEventListener('click', ()=>{
    const text2 = text.value;
    const para2=document.createElement('p');
    para2.textContent = text2;
    para.appendChild(para2);
    text.value='';

})