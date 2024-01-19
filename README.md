# DUN Card Helper

## About
DUN Card Helper is a fanmade web application designed to facilitate the gameplay of the board game Dungeon Universalis (DUN) developed and distributed by Ludic Dragon (all rights reserved). This project is developed with the assistance of ChatGPT and aims to provide a convenient tool for players, the designer has no prior HTML or JavaScript experience.

## Features
- **Card Display:** Allows players to view main cards and select them randomly, reducing the time spent on shuffling decks.
- **Spell Viewer:** Enables viewing of all spells from a chosen magic school, including a mana counter for tracking.
- **Dual Language Support:** The application is available in both Spanish (index.html) and English (index_EN.html).
- **Expansion Content:** (currently only in Spanish) Includes content from the game's expansion `New Challenges`.

## Structure
- `index.html` and `index_EN.html`: Main HTML files for the Spanish and English (EN) versions, respectively.
- `spells.html` and `spells_EN.html`: Sub-html scripts for displaying spells, in Spanish and English (EN).
- `script.js`, `script_EN.js`, and `card_names.js`: JavaScript files containing functionality and card names.
- `style.css` and `style_spells.css`: Contains the CSS styles used for the layout and design of the web application.
- `card_string_generator.py`: A Python script to fetch card filenames from their directories.
- `card_downloader.py`: A Python script to download card images from the official DUN website.

## Notes
- All card images are the property of Ludic Dragon. This app should only be used by individuals who own a copy of DUN.
- The developer is not a "Macondo" font, however he used this for consistency with the offical DUN website.

## Disclaimer
This is an amateur, fanmade project and may contain incoherent, redundant, and spaghetti code due to the developer's learning process.
