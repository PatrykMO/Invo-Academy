import { menuOptions } from './data';
import { toggleMenu } from './toggleMenu';

export function createSongBars(songs) {
    const songBars = [];

    songs.forEach((song) => {
        const songBar = document.createElement('div');
        songBar.className = 'songbar';

        const position = document.createElement('div');
        position.className = 'songbar__position';
        position.textContent = song.position;
        songBar.appendChild(position);

        const playButton = document.createElement('img');
        playButton.src = '/static/icons/play_2.png';
        playButton.className = 'songbar__position-hidden';
        playButton.alt = 'Play button';
        songBar.appendChild(playButton);

        const songContainer = document.createElement('div');
        songContainer.className = 'songbar__song-container';
        songBar.appendChild(songContainer);

        const albumCover = document.createElement('img');
        albumCover.src = song.albumCover;
        albumCover.alt = 'Album cover';
        albumCover.className = 'songbar__song-cover';
        songContainer.appendChild(albumCover);

        const infoContainer = document.createElement('div');
        infoContainer.className = 'songbar__info-container';
        songContainer.appendChild(infoContainer);

        const albumTitle = document.createElement('p');
        albumTitle.className = 'songbar__info-album';
        albumTitle.textContent = song.album;
        infoContainer.appendChild(albumTitle);

        const titleContainer = document.createElement('div');
        titleContainer.className = 'songbar__info-wrapper';
        infoContainer.appendChild(titleContainer);

        const songTitle = document.createElement('h3');
        songTitle.className = 'songbar__info-song';
        songTitle.textContent = song.song;
        titleContainer.appendChild(songTitle);

        const artistContainer = document.createElement('div');
        artistContainer.className = 'songbar__artist-container';
        songBar.appendChild(artistContainer);

        const artistTitle = document.createElement('p');
        artistTitle.className = 'songbar__artist-title';
        artistTitle.textContent = 'Artists';
        artistContainer.appendChild(artistTitle);

        const artistName = document.createElement('h3');
        artistName.className = 'songbar__artist-name';
        artistName.textContent = song.artist;
        artistContainer.appendChild(artistName);

        const timeContainer = document.createElement('div');
        timeContainer.className = 'songbar__time-container';
        songBar.appendChild(timeContainer);

        const timeTitle = document.createElement('p');
        timeTitle.className = 'songbar__time-title';
        timeTitle.textContent = 'Time';
        timeContainer.appendChild(timeTitle);

        const timeValue = document.createElement('h3');
        timeValue.className = 'songbar__time-value';
        timeValue.textContent = song.time;
        timeContainer.appendChild(timeValue);

        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'songbar__options-container';
        songBar.appendChild(optionsContainer);

        const favouritesIcon = document.createElement('img');
        favouritesIcon.src = '/static/icons/heart.png';
        favouritesIcon.alt = 'Favourite songs';
        favouritesIcon.className = 'songbar__options-favourites';
        optionsContainer.appendChild(favouritesIcon);

        const menuContainer = document.createElement('div');
        menuContainer.className = 'songbar__options__menu-container';
        menuContainer.id = 'options-menu';
        menuContainer.addEventListener('click', () => toggleMenu(menu));
        optionsContainer.appendChild(menuContainer);

        const menuIcon = document.createElement('img');
        menuIcon.src = '/static/icons/menu-dots.png';
        menuIcon.alt = 'Menu icon';
        menuIcon.className = 'songbar__options-menu';
        menuContainer.appendChild(menuIcon);

        const menu = document.createElement('div');
        menu.className = 'menu';

        menuOptions.forEach((option) => {
            const menuOption = document.createElement('div');
            menuOption.className = option.classNames.join(' ');

            if (menuOption.className.includes('menu__option')) {
                const optionText = document.createElement('p');
                optionText.className = 'menu__option__text';
                optionText.textContent = option.text;
                menuOption.appendChild(optionText);
            } else {
                const stroke = document.createElement('div');
                stroke.className = 'menu__stroke';
            }

            if ((option.classNames.includes('menu__option--underline-arrow')) ||
            (option.classNames.includes('menu__option--arrow'))) {
                const arrowIcon = document.createElement('img');
                arrowIcon.src = '/static/icons/arrow.png';
                arrowIcon.alt = 'Forward';
                arrowIcon.className = 'menu__option__arrow';
                menuOption.appendChild(arrowIcon);
            }

            menu.appendChild(menuOption);
        });

        menuContainer.appendChild(menu);

        songBars.push(songBar);
        });

    return songBars;
  };