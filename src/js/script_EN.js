function filterResourcesByTerrain(terrain) {
    if (terrain) {
        populateImageDropdown('resources', terrain);
    } else {
        // If no terrain is selected, show all resources
        populateImageDropdown('resources');
    }
}

function populateImageDropdown(deck, terrain = null) {
    var dropdown = document.getElementById(`imageDropdown_${deck}`);

    dropdown.innerHTML = ""; // Clear existing options

    // Add default option
    var defaultOption = document.createElement("option");
    defaultOption.disabled = true;
    defaultOption.selected = true;
    defaultOption.hidden = true;
    defaultOption.text = "Select card";
    dropdown.add(defaultOption);

    var deckImages = images_EN[deck]; // Retrieve images from your card_names.js

    if (includeExpansion && images_EN[`${deck}_exp`]) {
        deckImages = deckImages.concat(images_EN[`${deck}_exp`]);
    }

    // Check if we need to filter by terrain
    if (terrain && resourcesByTerrain[terrain]) {
        // Filter images that match the terrain resources
        deckImages = deckImages.filter(image => {
            const imageName = image.split("/").pop().replace(/\.(png|jpg)$/i, '');
            return resourcesByTerrain[terrain].some(resource => imageName.includes(resource));
        });
    }

    // Sort deckImages array alphabetically
    deckImages.sort(function (a, b) {
        var nameA = a.toLowerCase();
        var nameB = b.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });

    deckImages.forEach(function (image) {
        var option = document.createElement("option");
        var imageName = image.split("/").pop().replace(/\.(png|jpg)$/i, '');
        imageName = imageName.replace(/_/g, ' ').replace(/\((\d+)\)/g, ' $1');
        imageName = capitalizeFirstLetter(imageName);
        option.text = imageName;
        option.value = image;
        dropdown.add(option);
    });
}

function clearDropdownAndImageEvents(deck) {
    var dropdown = document.getElementById(`imageDropdown_${deck}`);
    dropdown.selectedIndex = 0;
    var selectedImageSrc = "assets/images/ENG/events/" + deck + "/back.png";
    document.getElementById(`selectedImage_${deck}`).src = selectedImageSrc;
}

function clearDropdownAndImageFurniture(deck) {
    var dropdown = document.getElementById(`imageDropdown_${deck}`);
    dropdown.selectedIndex = 0;
    var selectedImageSrc = "assets/images/ENG/furniture/" + deck + "/back.png";
    document.getElementById(`selectedImage_${deck}`).src = selectedImageSrc;
}

function clearDropdownAndImageCompanions(deck) {
    var dropdown = document.getElementById(`imageDropdown_${deck}`);
    dropdown.selectedIndex = 0;
    var selectedImageSrc = "assets/images/ENG/companions/" + deck + "/back.png";
    document.getElementById(`selectedImage_${deck}`).src = selectedImageSrc;
}

function clearDropdownAndImageItems(deck) {
    var dropdown = document.getElementById(`imageDropdown_${deck}`);
    dropdown.selectedIndex = 0;
    var selectedImageSrc = "assets/images/ENG/items/" + deck + "/back.png";
    document.getElementById(`selectedImage_${deck}`).src = selectedImageSrc;
}

function capitalizeFirstLetter(string) {
    return string.replace(/\b\w/g, function (l) {
        return l.toUpperCase();
    });
}

function changeRandomImage(deck) {
    var dropdown = document.getElementById(`imageDropdown_${deck}`);
    var validOptions = Array.from(dropdown.options).filter(option => !option.disabled);

    if (validOptions.length > 0) {
        // Show the loading GIF container
        var loadingGifContainer = document.getElementById('loadingGifContainer');
        loadingGifContainer.style.display = 'block';

        // Set a timeout to simulate loading time with a delay of 1 second
        setTimeout(function () {
            var randomIndex = Math.floor(Math.random() * validOptions.length);
            dropdown.selectedIndex = Array.from(dropdown.options).indexOf(validOptions[randomIndex]);
            var selectedImageSrc = dropdown.value;
            document.getElementById(`selectedImage_${deck}`).src = selectedImageSrc;

            // Hide the loading GIF container after setting the image
            loadingGifContainer.style.display = 'none';
        }, 300); // 1000 milliseconds (1 second)
    }
}

function changeSelectedImage(deck) {
    var dropdown = document.getElementById(`imageDropdown_${deck}`);
    var selectedImageSrc = dropdown.value;
    document.getElementById(`selectedImage_${deck}`).src = selectedImageSrc;
}

function showEventsSubMenu() {
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("furnitureSubmenu").style.display = "none";
    document.getElementById("companionsSubmenu").style.display = "none";
    document.getElementById("itemsSubmenu").style.display = "none";
    document.getElementById("infoButton").style.visibility = "hidden";
    document.getElementById("languageButton").style.display = "none";

    document.querySelectorAll('.deckPage').forEach(function (page) {
        page.style.display = "none";
    });

    document.getElementById("eventsSubmenu").style.display = "block";
    document.getElementById("eventsMenuSelect").selectedIndex = 0;
}

function showFurnitureSubMenu() {
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("eventsSubmenu").style.display = "none";
    document.getElementById("companionsSubmenu").style.display = "none";
    document.getElementById("itemsSubmenu").style.display = "none";
    document.getElementById("infoButton").style.visibility = "hidden";
    document.getElementById("languageButton").style.display = "none";

    document.querySelectorAll('.deckPage').forEach(function (page) {
        page.style.display = "none";
    });

    document.getElementById("furnitureSubmenu").style.display = "block";
    document.getElementById("furnitureMenuSelect").selectedIndex = 0;
}

function showCompanionsSubMenu() {
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("eventsSubmenu").style.display = "none";
    document.getElementById("furnitureSubmenu").style.display = "none";
    document.getElementById("itemsSubmenu").style.display = "none";
    document.getElementById("infoButton").style.visibility = "hidden";
    document.getElementById("languageButton").style.display = "none";

    document.querySelectorAll('.deckPage').forEach(function (page) {
        page.style.display = "none";
    });

    document.getElementById("companionsSubmenu").style.display = "block";
    document.getElementById("companionsMenuSelect").selectedIndex = 0;
}

function showItemsSubMenu() {
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("eventsSubmenu").style.display = "none";
    document.getElementById("furnitureSubmenu").style.display = "none";
    document.getElementById("companionsSubmenu").style.display = "none";
    document.getElementById("infoButton").style.visibility = "hidden";
    document.getElementById("languageButton").style.display = "none";


    document.querySelectorAll('.deckPage').forEach(function (page) {
        page.style.display = "none";
    });

    document.getElementById("itemsSubmenu").style.display = "block";
    document.getElementById("itemsMenuSelect").selectedIndex = 0;
}

function showMainMenu() {
    document.getElementById("eventsSubmenu").style.display = "none";
    document.getElementById("furnitureSubmenu").style.display = "none";
    document.getElementById("itemsSubmenu").style.display = "none";
    document.getElementById("companionsSubmenu").style.display = "none";

    document.querySelectorAll('.deckPage').forEach(function (page) {
        page.style.display = "none";
    });
    document.getElementById("mainMenu").style.display = "block";
    document.getElementById("infoButton").style.visibility = "visible";
    document.getElementById("languageButton").style.display = "block";

}

function showEventsDeckPage(deck) {
    document.getElementById("eventsSubmenu").style.display = "none";
    document.getElementById("mainMenu").style.display = "none";
    document.querySelectorAll('.deckPage').forEach(function (page) {
        page.style.display = "none";
    });

    var deckPageId = `deckPage_${deck}`;
    document.getElementById(deckPageId).style.display = "block";

    var selectedImageSrc = "/assets/images/ENG/events/" + deck + "/back.png";
    document.getElementById(`selectedImage_${deck}`).src = selectedImageSrc;

    clearDropdownAndImageEvents(deck);
    populateImageDropdown(deck);
}

function showFurnitureDeckPage(deck) {
    document.getElementById("furnitureSubmenu").style.display = "none";
    document.getElementById("mainMenu").style.display = "none";
    document.querySelectorAll('.deckPage').forEach(function (page) {
        page.style.display = "none";
    });

    var deckPageId = `deckPage_${deck}`;
    document.getElementById(deckPageId).style.display = "block";

    var selectedImageSrc = "/assets/images/ENG/furniture/" + deck + "/back.png";
    document.getElementById(`selectedImage_${deck}`).src = selectedImageSrc;

    clearDropdownAndImageFurniture(deck);
    populateImageDropdown(deck);
}

function showCompanionsDeckPage(deck) {
    document.getElementById("companionsSubmenu").style.display = "none";
    document.getElementById("mainMenu").style.display = "none";
    document.querySelectorAll('.deckPage').forEach(function (page) {
        page.style.display = "none";
    });

    var deckPageId = `deckPage_${deck}`;
    document.getElementById(deckPageId).style.display = "block";

    var selectedImageSrc = "/assets/images/ENG/companions/" + deck + "/back.png";
    document.getElementById(`selectedImage_${deck}`).src = selectedImageSrc;

    clearDropdownAndImageCompanions(deck);
    populateImageDropdown(deck);
}
function showItemsDeckPage(deck) {
    document.getElementById("itemsSubmenu").style.display = "none";
    document.getElementById("mainMenu").style.display = "none";
    document.querySelectorAll('.deckPage').forEach(function (page) {
        page.style.display = "none";
    });

    var deckPageId = `deckPage_${deck}`;
    document.getElementById(deckPageId).style.display = "block";

    var selectedImageSrc = "/assets/images/ENG/items/" + deck + "/back.png";
    document.getElementById(`selectedImage_${deck}`).src = selectedImageSrc;

    clearDropdownAndImageItems(deck);
    populateImageDropdown(deck);
}

function openSpellsPage() {
    document.getElementById('mainMenu').style.display = 'none';
    document.getElementById('eventsSubmenu').style.display = 'none';
    document.getElementById('furnitureSubmenu').style.display = 'none';
    document.getElementById('itemsSubmenu').style.display = 'none';
    document.getElementById("companionsSubmenu").style.display = "none";
    document.getElementById('infoButton').style.display = 'none';
    document.getElementById("languageButton").style.display = "none";
    document.getElementById('spellsFrame').src = 'src/html/spells_EN.html';
    document.getElementById('spellsPage').style.display = 'block';
}

// Info Button
var infoWindow = null;

function openInfoWindow() {
    // Check if the info window is already open
    if (infoWindow && !infoWindow.closed) {
        infoWindow.focus(); // If open, focus on the existing window
    } else {
        // If not open, open a new window with the specified text
        infoWindow = window.open('src/html/info_EN.html', '_blank', 'width=400,height=200');
    }
}

function openCraftingPage() {
    document.getElementById('mainMenu').style.display = 'none';
    document.getElementById('eventsSubmenu').style.display = 'none';
    document.getElementById('furnitureSubmenu').style.display = 'none';
    document.getElementById("companionsSubmenu").style.display = "none";
    document.getElementById('itemsSubmenu').style.display = 'none';
    document.getElementById('infoButton').style.display = 'none';
    document.getElementById("languageButton").style.display = "none";
    document.getElementById('spellsPage').style.display = 'none';
    document.getElementById('craftingFrame').src = 'src/html/crafting_EN.html';
    document.getElementById('craftingPage').style.display = 'block';
}

// Expansion
// Initialize from localStorage, default to true if not set
var includeExpansion = localStorage.getItem("includeExpansion") !== "false";

// Sync checkbox with stored value on page load
window.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem("includeExpansion") === null) {
        // First visit - set default to true
        localStorage.setItem("includeExpansion", "true");
    }
    document.getElementById("expansionCheckbox").checked = includeExpansion;
});

function toggleExpansion() {
    var isChecked = document.getElementById("expansionCheckbox").checked;
    localStorage.setItem("includeExpansion", isChecked);
    includeExpansion = isChecked;

    // Refresh all visible dropdowns to reflect the change immediately
    refreshVisibleDropdowns();
}

function refreshVisibleDropdowns() {
    // Get all deck pages
    var deckPages = document.querySelectorAll('.deckPage');

    // Find which deck page is currently visible
    deckPages.forEach(function (deckPage) {
        if (deckPage.style.display === 'block') {
            // Extract deck name from the page id (e.g., "deckPage_weapons" -> "weapons")
            var deckName = deckPage.id.replace('deckPage_', '');

            // Check if this deck has a dropdown
            var dropdown = document.getElementById(`imageDropdown_${deckName}`);
            if (dropdown) {
                // Repopulate the dropdown
                if (deckName === 'resources') {
                    // For resources, check if terrain filter is active
                    var terrainSelect = document.getElementById('terrainSelect');
                    var selectedTerrain = terrainSelect && terrainSelect.value !== terrainSelect.options[0].value ? terrainSelect.value : null;
                    populateImageDropdown(deckName, selectedTerrain);
                } else {
                    populateImageDropdown(deckName);
                }
            }
        }
    });
}

// Switch to Spanish version
function openSpanishPage() {
    window.location.href = 'index.html';
}
