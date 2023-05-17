const element = document.getElementById("btn");
element.addEventListener("click", myFunction);

function myFunction() {
    let op=document.querySelector('.share');
    op.classList.toggle('share__open');
}


const element1 = document.getElementById("bttn");
element1.addEventListener("click", myFunction1);

function myFunction1() {
    let op2=document.querySelector('.share');
    op2.classList.remove('share__open');
}
