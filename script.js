let form1 = document.getElementById("section1");
let form2 = document.getElementById("section2");
let form3 = document.getElementById("section3");
let form4 = document.getElementById("section4");
let phoneinput = document.getElementById('phone');
let phonerequired = document.getElementById('phone-valid');
let circle1 = document.getElementById('circle1');
let circle2 = document.getElementById('circle2');
let circle3 = document.getElementById('circle3');
let circle4 = document.getElementById('circle4');

let next1 = document.getElementById('next1');
let next2 = document.getElementById('next2');
let next3 = document.getElementById('next3');
let back1 = document.getElementById('back1');
let back2 = document.getElementById('back2');
let back3 = document.getElementById('back3');

next1.onclick = function() {
    if(phoneinput.validity.valid) {
        form1.style.display = 'none';
        form3.style.display = 'none';
        form2.style.display = 'block';
        form4.style.display = 'none';
        circle1.style.background = 'none';
        circle2.style.background = 'lightblue';
        circle2.style.color = 'black';
        circle1.style.color = 'white';
     }
    else {
      phoneinput.style.borderColor = 'red';
      phonerequired.style.display = 'block';
    }
    
}
phoneinput.onkeydown = function() {
    phoneinput.style.borderColor = '';
    phonerequired.style.display = 'none';
}
back1.onclick = function() {
    form1.style.display = 'block';
    form3.style.display = 'none';
    form2.style.display = 'none';
    form4.style.display = 'none';
    circle2.style.background = 'none';
    circle1.style.background = 'lightblue';
    circle1.style.color = 'black';
    circle2.style.color = 'white';
}
next2.onclick = function() {
    form1.style.display = 'none';
    form3.style.display = 'block';
    form2.style.display = 'none';
    form4.style.display = 'none';
    circle2.style.background = 'none';
    circle3.style.background = 'lightblue';
}
back2.onclick = function() {
    form1.style.display = 'none';
    form3.style.display = 'none';
    form2.style.display = 'block';
    form4.style.display = 'none';
    circle3.style.background = 'none';
    circle2.style.background = 'lightblue';
}
next3.onclick = function() {
    form1.style.display = 'none';
    form3.style.display = 'none';
    form2.style.display = 'none';
    form4.style.display = 'block';
    circle3.style.background = 'none';
    circle4.style.background = 'lightblue';
}
back3.onclick = function() {
    form1.style.display = 'none';
    form3.style.display = 'block';
    form2.style.display = 'none';
    form4.style.display = 'none';
    circle4.style.background = 'none';
    circle3.style.background = 'lightblue';
}

