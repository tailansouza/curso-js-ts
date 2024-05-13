const paragrafos = document.querySelector('.paragrafos');

const pes = document.querySelectorAll('p');

const styleBody = getComputedStyle(document.body);
const backGroudColorBody = styleBody.backgroundColor;

for (p of pes){
    p.style.backgroundColor = backGroudColorBody
    p.style.color = '#ffffff'
    pes[0].innerText = 'lalalalalal'
    pes[0].style.color = 'red'
}