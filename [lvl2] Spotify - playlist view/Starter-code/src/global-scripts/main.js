/// Main JavaScript File
/// Here we import all the global JavaScript files we need for our project.
import '../global-styles/style.scss';

import { songs } from './scripts/data';
import { createSongBars } from './scripts/createSongBars';
import { toggleMenu, toggleActive } from './scripts/utils';

export {
    createSongBars,
    songs,
    toggleMenu,
    toggleActive
};

