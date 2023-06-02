import { menuOptions } from './data';

export const toggleMenu = () => {
  const options = document.querySelectorAll('.songbar__options__menu-container');

  options.forEach((option) => {
    option.addEventListener('click', (event) => {
      event.stopPropagation();

      const existingMenus = document.querySelectorAll('.menu');

      existingMenus.forEach((menu) => {
        if (menu.parentNode !== option) {
          menu.parentNode.removeChild(menu);
        }
      });

      const existingMenu = option.querySelector('.menu');

      if (existingMenu) {
        option.removeChild(existingMenu);
      } else {
        const menu = document.createElement('div');
        menu.className = 'menu';

        menuOptions.forEach((menuOptionData) => {
          const menuOption = document.createElement('div');
          menuOption.className = menuOptionData.classNames.join(' ');

          if (menuOption.className.includes('menu__option')) {
            const optionText = document.createElement('p');
            optionText.className = 'menu__option__text';
            optionText.textContent = menuOptionData.text;
            menuOption.appendChild(optionText);
          } else if (!menuOption.className.includes('menu__stroke')) {
            const stroke = document.createElement('div');
            stroke.className = 'menu__stroke';
            menuOption.appendChild(stroke);
          }

          if (
            menuOptionData.classNames.includes('menu__option--underline-arrow') ||
            menuOptionData.classNames.includes('menu__option--arrow')
          ) {
            const arrowIcon = document.createElement('img');
            arrowIcon.src = '/static/icons/arrow.png';
            arrowIcon.alt = 'Forward';
            arrowIcon.className = 'menu__option__arrow';
            menuOption.appendChild(arrowIcon);
          }

          menu.appendChild(menuOption);
        });

        option.appendChild(menu);
      }
    });
  });
};



export const toggleActive = () => {
    const songbars = document.querySelectorAll('.songbar');

    const activateToggleActive = (targetSongbar) => {
      songbars.forEach((sb) => {
        if (sb !== targetSongbar) {
          sb.classList.remove('active');
        }
      });

      targetSongbar.classList.toggle('active');
    };

    songbars.forEach((songbar) => {
      songbar.addEventListener('click', (event) => {
        event.stopPropagation();

        if (!event.target.classList.contains('songbar__options__menu-container')) {
          activateToggleActive(songbar);
        }
      });
    });

    const options = document.querySelectorAll('.songbar__options__menu-container');

    options.forEach((option) => {
      option.addEventListener('click', (event) => {
        event.stopPropagation();

        const songbar = option.closest('.songbar');
        activateToggleActive(songbar);
      });
    });
  };