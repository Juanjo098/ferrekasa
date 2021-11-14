const menu_icon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

menu_icon.addEventListener('click', () =>{
    menu.classList.toggle('mostrar-menu');
});

window.addEventListener('resize', () => {
    if (document.documentElement.clientWidth > 1200)
        menu.classList.remove('mostrar-menu');
})

window.addEventListener('scroll', () => {
    menu.classList.remove('mostrar-menu');
})