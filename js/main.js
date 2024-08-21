//toggle menu active class
let menuBtn = document.querySelector(".menu-btn")
let menu = document.querySelector(".menu")
menuBtn.onclick = () => {
    menuBtn.classList.toggle("active")
    menu.classList.toggle("active")
}
//change bullets and filter data
let bullets = document.querySelectorAll(".bullet")
let boxs = document.querySelectorAll(".blog-boxs")
bullets.forEach(bullet => {
    bullet.addEventListener("click", changeClass)
    bullet.addEventListener( "click", filter)
})
function changeClass() {
    bullets.forEach(bullet => {
        bullet.classList.remove("active")
        this.classList.add("active")
    })
}
function filter() {
    boxs.forEach(box => {
        box.classList.remove("active")
        document.querySelectorAll(this.dataset.filter).forEach(box => {
            box.classList.add('active')
        })
    })
}
//make a counter
let counters = document.querySelectorAll(".counter")
let started = false
let calculation = document.getElementById("calculation")
function startCount(el) {
    let goal = el.dataset.count
    let interval = setInterval(() => {
        el.textContent++
        if (el.textContent == goal) {
            clearInterval(interval)
        }
    },2500/goal)
}
//-----clear inputs
let clerBtn = document.querySelector(".clear-btn")
let inps = document.querySelectorAll(".inp")
clerBtn.onclick = () => {
    inps.forEach(inp => {
        inp.value = ""
    })
}