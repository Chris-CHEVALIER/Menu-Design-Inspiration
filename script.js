function navFunction(x) {
    x.classList.toggle("change");
    if (document.getElementById("mySidenav").style.width === "200px") {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("corps").style.WebkitFilter = "none";
    } else {
        document.getElementById("mySidenav").style.width = "200px";
        document.getElementById("corps").style.WebkitFilter = "blur(5px)";
    }
}
