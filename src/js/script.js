function filterRecursosByTerreno(terreno) {
    if (terreno) {
        populateImageDropdown('recursos', terreno);
    } else {
        // If no terrain is selected, show all resources
        populateImageDropdown('recursos');
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
    defaultOption.text = "Seleccionar carta";
    dropdown.add(defaultOption);

    var deckImages = images[deck]; // Retrieve images from your card_names.js
    
    if (includeExpansion && images[`${deck}_exp`]) {
        deckImages = deckImages.concat(images[`${deck}_exp`]);
    }
    
    // Check if we need to filter by terrain
    if (terrain && recursosPorTerreno[terrain]) {
        // Filter images that match the terrain resources
        deckImages = deckImages.filter(image => {
            const imageName = image.split("/").pop().replace(/\.(png|jpg)$/i, '');
            return recursosPorTerreno[terrain].some(recurso => imageName.includes(recurso));
        });
    }

    // Sort deckImages array alphabetically
    deckImages.sort(function(a, b) {
        var nameA = a.toLowerCase();
        var nameB = b.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });

    // Populate the dropdown with images
    deckImages.forEach(function (image) {
        var option = document.createElement("option");
        var imageName = image.split("/").pop().replace(/\.(png|jpg)$/i, '');
        imageName = imageName.replace(/_/g, ' ').replace(/\((\d+)\)/g, ' $1');
        option.text = capitalizeFirstLetter(imageName);
        option.value = image;
        dropdown.add(option);
    });
}

function clearDropdownAndImageEncuentros(deck) {
    var dropdown = document.getElementById(`imageDropdown_${deck}`);
    dropdown.selectedIndex = 0;
    var selectedImageSrc = "assets/images/ESP/encuentros/" + deck + "/dorso.png";
    document.getElementById(`selectedImage_${deck}`).src = selectedImageSrc;
}

function clearDropdownAndImageMobiliario(deck) {
    var dropdown = document.getElementById(`imageDropdown_${deck}`);
    dropdown.selectedIndex = 0;
    var selectedImageSrc = "assets/images/ESP/mobiliario/" + deck + "/dorso.png";
    document.getElementById(`selectedImage_${deck}`).src = selectedImageSrc;
}

function clearDropdownAndImageAcompaniantes(deck) {
    var dropdown = document.getElementById(`imageDropdown_${deck}`);
    dropdown.selectedIndex = 0;
    var selectedImageSrc = "assets/images/ESP/acompaniantes/" + deck + "/dorso.png";
    document.getElementById(`selectedImage_${deck}`).src = selectedImageSrc;
}

function clearDropdownAndImageItems(deck) {
    var dropdown = document.getElementById(`imageDropdown_${deck}`);
    dropdown.selectedIndex = 0;
    var selectedImageSrc = "assets/images/ESP/items/" + deck + "/dorso.png";
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
        var loadingGifContainer = document.getElementById('loadingGifContainer');
        loadingGifContainer.style.display = 'block';

        setTimeout(function () {
            var randomIndex = Math.floor(Math.random() * validOptions.length);
            dropdown.selectedIndex = Array.from(dropdown.options).indexOf(validOptions[randomIndex]);
            var selectedImageSrc = dropdown.value;
            document.getElementById(`selectedImage_${deck}`).src = selectedImageSrc;

            loadingGifContainer.style.display = 'none';
        }, 300); 
    }
}

function changeSelectedImage(deck) {
    var dropdown = document.getElementById(`imageDropdown_${deck}`);
    var selectedImageSrc = dropdown.value;
    document.getElementById(`selectedImage_${deck}`).src = selectedImageSrc;
}

function showEncuentrosSubMenu() {
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("mobiliarioSubmenu").style.display = "none";
    document.getElementById("acompaniantesSubmenu").style.display = "none";
    document.getElementById("itemsSubmenu").style.display = "none";
    document.getElementById("infoButton").style.visibility = "hidden";
    document.getElementById("languageButton").style.display = "none";

    document.querySelectorAll('.deckPage').forEach(function (page) {
        page.style.display = "none";
    });

    document.getElementById("encuentrosSubmenu").style.display = "block";
    document.getElementById("encuentrosMenuSelect").selectedIndex = 0;
}

function showMobiliarioSubMenu() {
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("encuentrosSubmenu").style.display = "none";
    document.getElementById("acompaniantesSubmenu").style.display = "none";
    document.getElementById("itemsSubmenu").style.display = "none";
    document.getElementById("infoButton").style.visibility = "hidden";
    document.getElementById("languageButton").style.display = "none";

    document.querySelectorAll('.deckPage').forEach(function (page) {
        page.style.display = "none";
    });

    document.getElementById("mobiliarioSubmenu").style.display = "block";
    document.getElementById("mobiliarioMenuSelect").selectedIndex = 0;
}

function showAcompaniantesSubMenu() {
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("encuentrosSubmenu").style.display = "none";
    document.getElementById("mobiliarioSubmenu").style.display = "none";
    document.getElementById("itemsSubmenu").style.display = "none";
    document.getElementById("infoButton").style.visibility = "hidden";
    document.getElementById("languageButton").style.display = "none";

    document.querySelectorAll('.deckPage').forEach(function (page) {
        page.style.display = "none";
    });

    document.getElementById("acompaniantesSubmenu").style.display = "block";
    document.getElementById("acompaniantesMenuSelect").selectedIndex = 0;
}

function showItemsSubMenu() {
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("encuentrosSubmenu").style.display = "none";
    document.getElementById("mobiliarioSubmenu").style.display = "none";
    document.getElementById("acompaniantesSubmenu").style.display = "none";
    document.getElementById("infoButton").style.visibility = "hidden";
    document.getElementById("languageButton").style.display = "none";

    // Reset terrain dropdown when showing Items submenu
    var terrenoSelect = document.getElementById("terrenoSelect");
    terrenoSelect.selectedIndex = 0; // Reset to default selection
    clearDropdownAndImageItems('recursos');

    document.querySelectorAll('.deckPage').forEach(function (page) {
        page.style.display = "none";
    });

    document.getElementById("itemsSubmenu").style.display = "block";
    document.getElementById("itemsMenuSelect").selectedIndex = 0;
}

function showMainMenu() {
    document.getElementById("encuentrosSubmenu").style.display = "none";
    document.getElementById("mobiliarioSubmenu").style.display = "none";
    document.getElementById("acompaniantesSubmenu").style.display = "none";
    document.getElementById("itemsSubmenu").style.display = "none";

    document.querySelectorAll('.deckPage').forEach(function (page) {
        page.style.display = "none";
    });
    document.getElementById("mainMenu").style.display = "block";
    document.getElementById("infoButton").style.visibility = "visible";
    document.getElementById("languageButton").style.display = "block";

}

function showEncuentrosDeckPage(deck) {
    console.log("showEncuentrosDeckPage called with deck:", deck); // Add this to see if function is called with correct deck
    document.getElementById("encuentrosSubmenu").style.display = "none";
    document.getElementById("mainMenu").style.display = "none";
    document.querySelectorAll('.deckPage').forEach(function (page) {
        page.style.display = "none";
    });

    var deckPageId = `deckPage_${deck}`;
    document.getElementById(deckPageId).style.display = "block";

    var selectedImageSrc = "assets/images/ESP/encuentros/" + deck + "/dorso.png";
    document.getElementById(`selectedImage_${deck}`).src = selectedImageSrc;

    clearDropdownAndImageEncuentros(deck);
    populateImageDropdown(deck);
}

function showMobiliarioDeckPage(deck) {
    document.getElementById("mobiliarioSubmenu").style.display = "none";
    document.getElementById("mainMenu").style.display = "none";
    document.querySelectorAll('.deckPage').forEach(function (page) {
        page.style.display = "none";
    });

    var deckPageId = `deckPage_${deck}`;
    document.getElementById(deckPageId).style.display = "block";

    var selectedImageSrc = "assets/images/ESP/mobiliario/" + deck + "/dorso.png";
    document.getElementById(`selectedImage_${deck}`).src = selectedImageSrc;

    clearDropdownAndImageMobiliario(deck);
    populateImageDropdown(deck);
}

function showAcompaniantesDeckPage(deck) {
    document.getElementById("acompaniantesSubmenu").style.display = "none";
    document.getElementById("mainMenu").style.display = "none";
    document.querySelectorAll('.deckPage').forEach(function (page) {
        page.style.display = "none";
    });

    var deckPageId = `deckPage_${deck}`;
    document.getElementById(deckPageId).style.display = "block";

    var selectedImageSrc = "assets/images/ESP/acompaniantes/" + deck + "/dorso.png";
    document.getElementById(`selectedImage_${deck}`).src = selectedImageSrc;

    clearDropdownAndImageAcompaniantes(deck);
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

    var selectedImageSrc = "assets/images/ESP/items/" + deck + "/dorso.png";
    document.getElementById(`selectedImage_${deck}`).src = selectedImageSrc;

    clearDropdownAndImageItems(deck);
    populateImageDropdown(deck);
}

function openHechizosPage() {
    document.getElementById('mainMenu').style.display = 'none';
    document.getElementById('encuentrosSubmenu').style.display = 'none';
    document.getElementById('mobiliarioSubmenu').style.display = 'none';
    document.getElementById("acompaniantesSubmenu").style.display = "none";
    document.getElementById('itemsSubmenu').style.display = 'none';
    document.getElementById('infoButton').style.display = 'none';
    document.getElementById("languageButton").style.display = "none";
    document.getElementById('hechizosFrame').src = 'src/html/spells_ES.html';
    document.getElementById('hechizosPage').style.display = 'block';
    document.getElementById('craftingPage').style.display = 'none';
}

function openCraftingPage() {
    document.getElementById('mainMenu').style.display = 'none';
    document.getElementById('encuentrosSubmenu').style.display = 'none';
    document.getElementById('mobiliarioSubmenu').style.display = 'none';
    document.getElementById("acompaniantesSubmenu").style.display = "none";
    document.getElementById('itemsSubmenu').style.display = 'none';
    document.getElementById('infoButton').style.display = 'none';
    document.getElementById("languageButton").style.display = "none";
    document.getElementById('hechizosPage').style.display = 'none';
    document.getElementById('craftingFrame').src = 'src/html/crafting.html';
    document.getElementById('craftingPage').style.display = 'block';
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

// Expansion
var includeExpansion = true;

function toggleExpansion() {
    var isChecked = document.getElementById("expansionCheckbox").checked;
    localStorage.setItem("includeExpansion", isChecked);
    includeExpansion = document.getElementById("expansionCheckbox").checked;
}

// Switch to English version
function openEnglishPage() {
    window.location.href = 'index_EN.html';
}



