const menuDisplay = document.getElementById("menuDisplay");
const closeDisplay = document.getElementById("closeDisplay");
const navbar = document.getElementById("navbar");

menuDisplay.addEventListener("click",menuShow )
closeDisplay.addEventListener("click",menuShow )

const closeMenu = {
    transform: "translateX(220px)"
}
const closeMenuTiming = {
    duration: 0.5,
}

function menuShow() {
    if(menuDisplay.className === "menu"){
        menuDisplay.className = "hidden";
        closeDisplay.className = "close";
        navbar.className = "active"
    } else{
        menuDisplay.className = "menu";
        closeDisplay.className = "hidden";
        navbar.className = "off"
    }
}