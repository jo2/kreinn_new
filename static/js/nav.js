function toggleMenu() {
    let x = document.getElementById("nav-menu");
    if (x.className === "nav-right") {
        x.className += " responsive";
    } else {
        x.className = "nav-right";
    }
}
