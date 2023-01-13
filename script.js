let form1 = document.getElementById("section1");
let form2 = document.getElementById("section2");

let next1 = document.getElementById('next1');
let next2 = document.getElementById('next2');
let back1 = document.getElementById('back1');

next1.onclick = function() {
    form1.style.left = '-700px';
    form2.style.left = '40px';
}
back1.onclick = function() {
    form1.style.left = '40px';
    form2.style.left = '700px';
}
next2.onclick = function() {
    form2.style.left = '-700px';
}

