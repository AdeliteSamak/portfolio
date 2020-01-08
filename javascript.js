const listElements = document.querySelectorAll("li");
let main_image = document.querySelector("#image");
let one_rotatesc = document.querySelector("#one");
one_rotatesc.addEventListener("click", startRotate);
let two_flip = document.querySelector("#two");
two_flip.addEventListener("click", startFlip);
let three_flash = document.querySelector("#three");
three_flash.addEventListener("click", startFlash);
let four_skew = document.querySelector("#four");
four_skew.addEventListener("click", startSkew);
let five_translate = document.querySelector("#five");
five_translate.addEventListener("click", startTranslate);
let six_pulse = document.querySelector("#six");
six_pulse.addEventListener("click", startPulse);
let seven_pendulum = document.querySelector("#seven");
seven_pendulum.addEventListener("click", startPendulum);
let eight_jump = document.querySelector("#eight");
eight_jump.addEventListener("click", startJump);
let nine_square = document.querySelector("#nine");
nine_square.addEventListener("click", startSquare);
let ten_fade = document.querySelector("#ten");
ten_fade.addEventListener("click", startFade);

const radio = new Audio('./mouse_click.mp3');
listElements.forEach(displayIt);
function displayIt(element){
    element.addEventListener("click", ()=>{
        radio.play();
    });
}

function markIt(){
    this.classList.toggle("mark");
}
function startRotate(){
    main_image.classList.toggle("rotatesc");
}
function startFlip(){
    main_image.classList.toggle("flip");
}
function startFlash(){
    main_image.classList.toggle("flash");
}
function startSkew(){
    main_image.classList.toggle("skew");
}
function startTranslate(){
    main_image.classList.toggle("translate");
}
function startPulse(){
    main_image.classList.toggle("pulse");
}
function startPendulum(){
    main_image.classList.toggle("pendulum");
}
function startJump(){
    main_image.classList.toggle("jump");
}
function startSquare(){
    main_image.classList.toggle("square");
}
function startFade(){
    main_image.classList.toggle("fade");
}

const lines = document.querySelectorAll(".line");
lines.forEach(drawThis);
function drawThis(line, i) {
    setTimeout(function () {
        line.classList.add("draw");
    }, i * 1000);
}
function myFunction(e) {
    document.body.classList.toggle("dark-mode");
    if (e.target.innerText == "Dark mode") {
        e.target.innerText = "Light mode"
    }
    else {
        e.target.innerText = "Dark mode"
    }
 }