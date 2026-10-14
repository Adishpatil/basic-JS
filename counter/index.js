let count = 0

let d = document.getElementById("Display")

function increment() {
    count += 1
    document.getElementById("count-el").innerText = count
}

function save() {
    let cstr = count + " - "
    d.textContent += cstr
    count = 0
    document.getElementById("count-el").innerText = count

}