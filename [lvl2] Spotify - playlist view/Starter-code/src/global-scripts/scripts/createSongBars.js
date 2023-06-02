import { menuOptions } from './data';
import { toggleMenu } from './utils';

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

        const songTitle = document.createElement('h3');
        songTitle.className = 'songbar__info-song';
        songTitle.textContent = song.song;
        infoContainer.appendChild(songTitle);

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
        optionsContainer.appendChild(menuContainer);

        const menuIcon = document.createElement('img');
        menuIcon.src = '/static/icons/menu-dots.png';
        menuIcon.alt = 'Menu icon';
        menuIcon.className = 'songbar__options-menu';
        menuContainer.appendChild(menuIcon);

        songBars.push(songBar);
    });

    return songBars;
  };