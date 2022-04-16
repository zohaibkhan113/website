function checkerror() {
    let x = document.getElementById('name').value;
    let y = document.getElementById("nameerr");
    if (x.length < 4) {
        y.innerHTML = "At least 4 characters"
    }
    else if (x.length >= 100) {
        y.innerHTML = "Not more than 100 characters"
    }
    else {
        y.innerHTML = ""
    }

}
function checkemail() {
    let x = document.getElementById('email').value;
    let y = document.getElementById("emailerr");
    if (x.search("@") == -1) {
        y.innerHTML = "Inavid Email"
    }
    else {
        y.innerHTML = ""
    }

}
function checkmsg() {
    let x = document.getElementById('msg').value;
    let y = document.getElementById("msgerr");
    if (x.length < 3) {
        y.innerHTML = "At least 3 characters"
    }

    else {
        y.innerHTML = ""
    }

}
let a = 0
function slider() {
    let slide = document.getElementById("slide");

    if (a == 0) {
        slide.setAttribute("src", './images/index.jpeg')
        a = 1
       
    }
    else {
        a = 0
        slide.setAttribute("src", './images/slide1.jpeg')

    }
}
setInterval(slider,500);