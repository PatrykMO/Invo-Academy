export const toggleMenu = (menu) => {
    if (menu && menu.classList) {
        if (menu.classList.contains ('visible')) {
        menu.classList.remove('visible');
    } else {
        menu.classList.add('visible');
    }
    }
};