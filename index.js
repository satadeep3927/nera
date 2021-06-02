const hamburger = document.getElementById("hamburger")
const navigation = document.getElementById("d-nav")
hamburger.addEventListener("click",()=>{
    navigation.classList.add("active")
})
const active = document.getElementById("active-ham")
active.addEventListener("click",()=>{
    navigation.classList.remove("active")
})
