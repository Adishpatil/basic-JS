let num1 = 8
let num2 = 2
document.getElementById("num1").textContent = num1
document.getElementById("num2").textContent = num2
let s = document.getElementById("sum")
function add() {
    s.textContent += num1 + num2
}
function sub() {
    s.textContent += num1 - num2
}
function div() {
    s.textContent += num1 / num2
}
function mul() {
    s.textContent += num1 * num2
}
function rest() {
    s.textContent = "Sum :"
}