# DUN Card Helper

## About
DUN Card Helper is a fanmade web application designed to facilitate the gameplay of the board game Dungeon Universalis (DUN) developed and distributed by Ludic Dragon (all rights reserved). This project is developed with the assistance of ChatGPT and aims to provide a convenient tool for players, the designer has no prior HTML or JavaScript experience.

## Features
- **Card Display:** Allows players to view main cards and select them randomly, reducing the time spent on shuffling decks.
- **Spell Viewer:** Enables viewing of all spells from a chosen magic school, including a mana counter for tracking.
- **Dual Language Support:** The application is available in both Spanish (index.html) and English (index_EN.html).
- **Expansion Content:** (currently only in Spanish) Includes content from the game's expansion `New Challenges`.

## Structure
- `index.html` and `index_EN.html`: Main HTML files for the Spanish and English versions, respectively.
- `spells.html` and `spells_EN.html`: Sub-html scripts for displaying spells.
- `script.js` and `card_names.js`: JavaScript files containing functionality and card names (used for spanish version only).
- `style.css`: Contains the CSS styles used for the layout and design of the web application (for for spanish version only).
- `index_experiment.html`: A test playground for new features and experiments.
- `card_string_generator.py`: A Python script to fetch card filenames from their directories.
- `card_downloader.py`: A Python script to download card images from the official DUN website.

## Notes
- The English version code (`index_EN.html`) is currently a mixture of HTML, JavaScript, and inline styles, particularly in the English version, as it was created while the author was learning. Despite this, it is fully functional. The Spanish version code is split in HTML (`index.html`), java (`script.js` and `card_names.js`), and CSS (`style.css`). The plan is to change the English version in the future too, and reduce the redundant code between the two versions.
- All card images are the property of Ludic Dragon. This app should only be used by individuals who own a copy of DUN.
- Im not a big fan of the "Macondo" font, however I used this for consistency with the offical DUN website.

## Disclaimer
This is an amateur, fanmade project and may contain incoherent, redundant, and spaghetti code due to the developer's learning process.
