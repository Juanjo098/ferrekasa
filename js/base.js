const menu_icon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');
var op = 0;

menu_icon.addEventListener('click', () =>{
    if (op == 0) {
        menu.style.display = "flex";
        op = 1;
    }
    else{
        menu.style.display = "none";
        op = 0;
    }
    // menu.classList.toggle('mostrar-menu');
});