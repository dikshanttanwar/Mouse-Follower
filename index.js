let circle = document.querySelector(".circle")
document.addEventListener("mousemove",(e)=>{
    clientX = e.clientX
    clientY = e.clientY
    // circle.style.position = "relative";
    circle.style.top = `${e.clientY}px`
    circle.style.left = `${e.clientX}px`
})