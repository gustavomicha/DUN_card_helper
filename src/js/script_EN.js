function populateImageDropdown(deck) {
    var dropdown = document.getElementById(`imageDropdown_${deck}`);

    dropdown.innerHTML = ""; // Clear existing options

    // Add default option
    var defaultOption = document.createElement("option");
    defaultOption.disabled = true;
    defaultOption.selected = true;
    defaultOption.hidden = true;
    defaultOption.text = "Select card";
    dropdown.add(defaultOption);

    images_EN[deck].forEach(function (image) {
        var option = document.createElement("option");
        var imageName = image.split("/").pop().replace(/\.(png|jpg)$/i, '');
        imageName = imageName.replace(/_/g, ' ');
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
    document.getElementById("itemsSubmenu").style.display = "none";
    document.getElementById("infoButton").style.visibility = "hidden";
    document.getElementById("languageButton").style.display = "none";

    document.querySelectorAll('.deckPage').forEach(function (page) {
        page.style.display = "none";
    });

    document.getElementById("furnitureSubmenu").style.display = "block";
    document.getElementById("furnitureMenuSelect").selectedIndex = 0;
}

function showItemsSubMenu() {
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("eventsSubmenu").style.display = "none";
    document.getElementById("furnitureSubmenu").style.display = "none";
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
        infoWindow = window.open('src/html/info.html', '_blank', 'width=400,height=200');
    }
}

// Switch to Spanish version
function openSpanishPage() {
    window.location.href = 'index.html';
}
