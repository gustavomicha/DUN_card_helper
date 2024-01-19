function populateImageDropdown(deck) {
    var dropdown = document.getElementById(`imageDropdown_${deck}`);
    dropdown.innerHTML = ""; // Clear existing options

    // Add default option
    var defaultOption = document.createElement("option");
    defaultOption.disabled = true;
    defaultOption.selected = true;
    defaultOption.hidden = true;
    defaultOption.text = "Seleccionar carta";
    dropdown.add(defaultOption);

    var deckImages = images[deck];
    if (includeExpansion && images[`${deck}_exp`]) {
        deckImages = deckImages.concat(images[`${deck}_exp`]);
    }

    // Sort deckImages array alphabetically
    deckImages.sort(function(a, b) {
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

function showEncuentrosSubMenu() {
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("mobiliarioSubmenu").style.display = "none";
    document.getElementById("itemsSubmenu").style.display = "none";
    document.getElementById("infoButton").style.visibility = "hidden";

    document.querySelectorAll('.deckPage').forEach(function (page) {
        page.style.display = "none";
    });

    document.getElementById("encuentrosSubmenu").style.display = "block";
    document.getElementById("encuentrosMenuSelect").selectedIndex = 0;
    document.getElementById("languageButton").style.display = "none";
}

function showMobiliarioSubMenu() {
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("encuentrosSubmenu").style.display = "none";
    document.getElementById("itemsSubmenu").style.display = "none";
    document.getElementById("infoButton").style.visibility = "hidden";
    document.getElementById("languageButton").style.display = "none";

    document.querySelectorAll('.deckPage').forEach(function (page) {
        page.style.display = "none";
    });

    document.getElementById("mobiliarioSubmenu").style.display = "block";
    document.getElementById("mobiliarioMenuSelect").selectedIndex = 0;
}

function showItemsSubMenu() {
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("encuentrosSubmenu").style.display = "none";
    document.getElementById("mobiliarioSubmenu").style.display = "none";
    document.getElementById("infoButton").style.visibility = "hidden";
    document.getElementById("languageButton").style.display = "none";


    document.querySelectorAll('.deckPage').forEach(function (page) {
        page.style.display = "none";
    });

    document.getElementById("itemsSubmenu").style.display = "block";
    document.getElementById("itemsMenuSelect").selectedIndex = 0;
}

function showMainMenu() {
    document.getElementById("encuentrosSubmenu").style.display = "none";
    document.getElementById("mobiliarioSubmenu").style.display = "none";
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
    document.getElementById('itemsSubmenu').style.display = 'none';
    document.getElementById("languageButton").style.display = "none";
    document.getElementById('infoButton').style.display = 'none';

    document.getElementById('hechizosFrame').src = 'src/html/spells_ES.html';
    document.getElementById('hechizosPage').style.display = 'block';
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



