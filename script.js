let settingsmenu = document.querySelector(".settings-menu");


function settingMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
};

let darkBtn = document.getElementById("dark-btn");

darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
// Secondly theme mode will be on/off through onclick button name, so changing occured on click.
    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }
    else{
        localStorage.setItem("theme", "light");
    }
}
// At first we write below condition to be light mode removing the classes both, but if it is in dark mode then need to add both classes, otherwise it will normally be light mode by default.

if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else {
    localStorage.setItem("theme", "light");
}

// localStorage.setItem("theme", "dark"); to create a storage in the browser
// localStorage.getItem("theme"); to read the theme only wheather it is light or dark