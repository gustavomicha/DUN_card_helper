var counters = []; 
var includeExpansion = localStorage.getItem("includeExpansion") === "true";
var base_path_spell = "../../assets/images/ESP/hechizos/";
var base_path_spell_exp = "../../assets/images/ESP/hechizos_exp/";
var defaultImage = base_path_spell + '/default.png';

var spellImages = {
    agua: ['agua/193.jpg', 'agua/194.jpg', 'agua/195.jpg', 'agua/196.jpg', 'agua/197.jpg', 'agua/198.jpg'],
    aire: ['aire/199.jpg', 'aire/200.jpg', 'aire/201.jpg', 'aire/202.jpg', 'aire/203.jpg', 'aire/287.jpg'],
    animismo: ['animismo/204.jpg', 'animismo/205.jpg', 'animismo/206.jpg', 'animismo/207.jpg', 'animismo/208.jpg', 'animismo/209.jpg'],
    bendiciones: ['bendiciones/210.jpg', 'bendiciones/211.jpg', 'bendiciones/212.jpg', 'bendiciones/213.jpg', 'bendiciones/214.jpg', 'bendiciones/215.jpg'],
    brujeria: ['brujeria/216.jpg', 'brujeria/217.jpg', 'brujeria/218.jpg', 'brujeria/219.jpg', 'brujeria/220.jpg', 'brujeria/221.jpg'],
    canalizacion: ['canalizacion/222.jpg', 'canalizacion/223.jpg', 'canalizacion/224.jpg', 'canalizacion/225.jpg', 'canalizacion/226.jpg', 'canalizacion/227.jpg'],
    control: ['control/228.jpg', 'control/229.jpg', 'control/230.jpg', 'control/231.jpg', 'control/232.jpg', 'control/233.jpg'],
    corrupcion: ['corrupcion/234.jpg', 'corrupcion/235.jpg', 'corrupcion/236.jpg', 'corrupcion/237.jpg', 'corrupcion/238.jpg', 'corrupcion/239.jpg'],
    fuego: ['fuego/240.jpg', 'fuego/241.jpg', 'fuego/242.jpg', 'fuego/243.jpg', 'fuego/244.jpg', 'fuego/245.jpg'],
    inframundo: ['inframundo/246.jpg', 'inframundo/247.jpg', 'inframundo/248.jpg', 'inframundo/249.jpg', 'inframundo/250.jpg', 'inframundo/251.jpg'],
    interpretacion: ['interpretacion/252.jpg', 'interpretacion/253.jpg', 'interpretacion/254.jpg', 'interpretacion/255.jpg', 'interpretacion/256.jpg', 'interpretacion/257.jpg'],
    luz: ['luz/258.jpg', 'luz/259.jpg', 'luz/260.jpg', 'luz/261.jpg', 'luz/262.jpg', 'luz/263.jpg'],
    nigromancia: ['nigromancia/264.jpg', 'nigromancia/265.jpg', 'nigromancia/266.jpg', 'nigromancia/267.jpg', 'nigromancia/268.jpg', 'nigromancia/269.jpg'],
    runica: ['runica/270.jpg', 'runica/271.jpg', 'runica/272.jpg', 'runica/273.jpg', 'runica/274.jpg', 'runica/275.jpg'],
    tierra: ['tierra/276.jpg', 'tierra/277.jpg', 'tierra/278.jpg', 'tierra/279.jpg', 'tierra/280.jpg', 'tierra/288.jpg'],
    tribal: ['tribal/281.jpg', 'tribal/282.jpg', 'tribal/283.jpg', 'tribal/284.jpg', 'tribal/285.jpg', 'tribal/286.jpg'],
    };

var spellExpImages = {
    favores_exp: ['favores_exp/353.jpg', 'favores_exp/354.jpg', 'favores_exp/355.jpg', 'favores_exp/356.jpg', 'favores_exp/357.jpg', 'favores_exp/358.jpg', 'favores_exp/359.jpg', 'favores_exp/360.jpg', 'favores_exp/361.jpg', 'favores_exp/362.jpg'],
    mentalismo_exp: ['mentalismo_exp/363.jpg', 'mentalismo_exp/364.jpg', 'mentalismo_exp/365.jpg', 'mentalismo_exp/366.jpg', 'mentalismo_exp/367.jpg', 'mentalismo_exp/368.jpg', 'mentalismo_exp/369.jpg', 'mentalismo_exp/370.jpg', 'mentalismo_exp/371.jpg', 'mentalismo_exp/372.jpg'],
    agua_exp: ['agua_exp/297.jpg', 'agua_exp/298.jpg', 'agua_exp/299.jpg', 'agua_exp/300.jpg'],
    aire_exp: ['aire_exp/293.jpg', 'aire_exp/294.jpg', 'aire_exp/295.jpg', 'aire_exp/296.jpg'],
    animismo_exp: ['animismo_exp/349.jpg', 'animismo_exp/350.jpg', 'animismo_exp/351.jpg', 'animismo_exp/352.jpg'],
    bendiciones_exp: ['bendiciones_exp/309.jpg', 'bendiciones_exp/310.jpg', 'bendiciones_exp/311.jpg', 'bendiciones_exp/312.jpg'],
    brujeria_exp: ['brujeria_exp/325.jpg', 'brujeria_exp/326.jpg', 'brujeria_exp/327.jpg', 'brujeria_exp/328.jpg'],
    canalizacion_exp: ['canalizacion_exp/341.jpg', 'canalizacion_exp/342.jpg', 'canalizacion_exp/343.jpg', 'canalizacion_exp/344.jpg'],
    control_exp: ['control_exp/345.jpg', 'control_exp/346.jpg', 'control_exp/347.jpg', 'control_exp/348.jpg'],
    corrupcion_exp: ['corrupcion_exp/333.jpg', 'corrupcion_exp/334.jpg', 'corrupcion_exp/335.jpg', 'corrupcion_exp/336.jpg'],
    fuego_exp: ['fuego_exp/289.jpg', 'fuego_exp/290.jpg', 'fuego_exp/291.jpg', 'fuego_exp/292.jpg'],
    inframundo_exp: ['inframundo_exp/329.jpg', 'inframundo_exp/330.jpg', 'inframundo_exp/331.jpg', 'inframundo_exp/332.jpg'],
    interpretacion_exp: ['interpretacion_exp/313.jpg', 'interpretacion_exp/314.jpg', 'interpretacion_exp/315.jpg', 'interpretacion_exp/316.jpg'],
    luz_exp: ['luz_exp/317.jpg', 'luz_exp/318.jpg', 'luz_exp/319.jpg', 'luz_exp/320.jpg'],
    nigromancia_exp: ['nigromancia_exp/321.jpg', 'nigromancia_exp/322.jpg', 'nigromancia_exp/323.jpg', 'nigromancia_exp/324.jpg'],
    runica_exp: ['runica_exp/305.jpg', 'runica_exp/306.jpg', 'runica_exp/307.jpg', 'runica_exp/308.jpg'],
    tierra_exp: ['tierra_exp/301.jpg', 'tierra_exp/302.jpg', 'tierra_exp/303.jpg', 'tierra_exp/304.jpg'],
    tribal_exp: ['tribal_exp/337.jpg', 'tribal_exp/338.jpg', 'tribal_exp/339.jpg', 'tribal_exp/340.jpg'],
};

function prependBasePath(imageArray, basePath) {
    return imageArray.map(image => basePath + image);
}

function changeImage() {
    var select = document.getElementById("saberSelect");
    var selectedOption = select.value;
    var imageArray = [];

    if (selectedOption === "default") {
        showDefaultImages();
    } else {
        // Handle base images
        if (spellImages[selectedOption]) {
            imageArray = prependBasePath(spellImages[selectedOption], base_path_spell);
        }

        // Concatenate expansion images if needed
        if (includeExpansion && spellExpImages[selectedOption + "_exp"]) {
            imageArray = imageArray.concat(prependBasePath(spellExpImages[selectedOption + "_exp"], base_path_spell_exp));
        }

        // If there are images to show, call showImages
        if (imageArray.length > 0) {
            showImages(imageArray);
        } else {
            // Handle the case where no images are found
            console.error("No images found for the selected option.");
            showDefaultImages();
        }
    }
}



function updateCounter(value, index) {
    counters[index] += value;
    
    // Ensure the counter stays within the desired range
    if (counters[index] < 0) {
        counters[index] = 0;
    } else if (counters[index] > 99) {
        counters[index] = 99;
    }

    updateCounterDisplay(index);
}

function updateCounterDisplay(index) {
    var counterElement = document.getElementById("counter" + index);
    counterElement.textContent = counters[index].toString();
}


function resetCounters() {
    for (var i = 0; i < counters.length; i++) {
        counters[i] = 0;
        updateCounterDisplay(i);
    }
}

function goToMainMenu() {
    window.parent.location.href = "../../index.html";
}

function showDefaultImages() {
    var scrollableContainer = document.getElementById("scrollableContainer");
    scrollableContainer.innerHTML = "";

    for (var i = 0; i < 6; i++) {
        
        var imageWrapper = document.createElement("div");
        imageWrapper.classList.add("imageWrapper");

        var image = document.createElement("img");
        image.src = defaultImage;
        image.alt = "";

        imageWrapper.appendChild(image); // Append the image to the imageWrapper
        scrollableContainer.appendChild(imageWrapper); // Append the imageWrapper to the scrollableContainer
    }
}


function manageCounters() {
    var scrollableContainer = document.getElementById("scrollableContainer");
    scrollableContainer.innerHTML = "";

    for (var i = 0; i < 5; i++) {
        counters[i] = 0; // Initialize counters with 0
        updateCounterDisplay(i);

        var counter = document.createElement("div");
        counter.classList.add("counter");

        var minusButton = document.createElement("button");
        minusButton.classList.add("minus");
        minusButton.textContent = "-";
        minusButton.onclick = (function(index) {
            return function() {
                updateCounter(-1, index);
            };
        })(i);

        var counterValue = document.createElement("span");
        counterValue.id = "counter" + i;
        counterValue.textContent = "0";

        var plusButton = document.createElement("button");
        plusButton.classList.add("plus");
        plusButton.textContent = "+";
        plusButton.onclick = (function(index) {
            return function() {
                updateCounter(1, index);
            };
        })(i);

        counter.appendChild(minusButton);
        counter.appendChild(counterValue);
        counter.appendChild(plusButton);

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(counter);
        scrollableContainer.appendChild(imageWrapper);
    }
}


function showImages(imageArray) {
    var scrollableContainer = document.getElementById("scrollableContainer");
    scrollableContainer.innerHTML = "";

    counters = new Array(imageArray.length).fill(0); // Initialize counters array with 0s

    imageArray.forEach(function(imageSrc, index) {
        var imageWrapper = document.createElement("div");
        imageWrapper.classList.add("imageWrapper");

        var image = document.createElement("img");
        image.src = imageSrc;
        image.alt = "";

        var counter = document.createElement("div");
        counter.classList.add("counter");

        var minusButton = document.createElement("button");
        minusButton.classList.add("minus");
        minusButton.textContent = "-";
        minusButton.onclick = (function(index) {
            return function() {
                updateCounter(-1, index);
            };
        })(index);

        var counterValue = document.createElement("span");
        counterValue.id = "counter" + index;
        counterValue.textContent = "0";

        var plusButton = document.createElement("button");
        plusButton.classList.add("plus");
        plusButton.textContent = "+";
        plusButton.onclick = (function(index) {
            return function() {
                updateCounter(1, index);
            };
        })(index);

        counter.appendChild(minusButton);
        counter.appendChild(counterValue);
        counter.appendChild(plusButton);

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(counter);
        scrollableContainer.appendChild(imageWrapper);
    });
}

window.onload = function() {
    showDefaultImages();
    document.getElementById("saberSelect").value = "default";
};
