var includeExpansion = localStorage.getItem("includeExpansion") === "true";
var counters = [];
var defaultImage = "assets/images/ESP/hechizos/default.png";
var aguaImages = ['assets/images/ESP/hechizos/agua/193.jpg', 'assets/images/ESP/hechizos/agua/194.jpg', 'assets/images/ESP/hechizos/agua/195.jpg', 'assets/images/ESP/hechizos/agua/196.jpg', 'assets/images/ESP/hechizos/agua/197.jpg', 'assets/images/ESP/hechizos/agua/198.jpg'];
var aireImages = ['assets/images/ESP/hechizos/aire/199.jpg', 'assets/images/ESP/hechizos/aire/200.jpg', 'assets/images/ESP/hechizos/aire/201.jpg', 'assets/images/ESP/hechizos/aire/202.jpg', 'assets/images/ESP/hechizos/aire/203.jpg', 'assets/images/ESP/hechizos/aire/287.jpg'];
var animismoImages = ['assets/images/ESP/hechizos/animismo/204.jpg', 'assets/images/ESP/hechizos/animismo/205.jpg', 'assets/images/ESP/hechizos/animismo/206.jpg', 'assets/images/ESP/hechizos/animismo/207.jpg', 'assets/images/ESP/hechizos/animismo/208.jpg', 'assets/images/ESP/hechizos/animismo/209.jpg'];
var bendicionesImages = ['assets/images/ESP/hechizos/bendiciones/210.jpg', 'assets/images/ESP/hechizos/bendiciones/211.jpg', 'assets/images/ESP/hechizos/bendiciones/212.jpg', 'assets/images/ESP/hechizos/bendiciones/213.jpg', 'assets/images/ESP/hechizos/bendiciones/214.jpg', 'assets/images/ESP/hechizos/bendiciones/215.jpg'];
var brujeriaImages = ['assets/images/ESP/hechizos/brujeria/216.jpg', 'assets/images/ESP/hechizos/brujeria/217.jpg', 'assets/images/ESP/hechizos/brujeria/218.jpg', 'assets/images/ESP/hechizos/brujeria/219.jpg', 'assets/images/ESP/hechizos/brujeria/220.jpg', 'assets/images/ESP/hechizos/brujeria/221.jpg'];
var canalizacionImages = ['assets/images/ESP/hechizos/canalizacion/222.jpg', 'assets/images/ESP/hechizos/canalizacion/223.jpg', 'assets/images/ESP/hechizos/canalizacion/224.jpg', 'assets/images/ESP/hechizos/canalizacion/225.jpg', 'assets/images/ESP/hechizos/canalizacion/226.jpg', 'assets/images/ESP/hechizos/canalizacion/227.jpg'];
var controlImages = ['assets/images/ESP/hechizos/control/228.jpg', 'assets/images/ESP/hechizos/control/229.jpg', 'assets/images/ESP/hechizos/control/230.jpg', 'assets/images/ESP/hechizos/control/231.jpg', 'assets/images/ESP/hechizos/control/232.jpg', 'assets/images/ESP/hechizos/control/233.jpg'];
var corrupcionImages = ['assets/images/ESP/hechizos/corrupcion/234.jpg', 'assets/images/ESP/hechizos/corrupcion/235.jpg', 'assets/images/ESP/hechizos/corrupcion/236.jpg', 'assets/images/ESP/hechizos/corrupcion/237.jpg', 'assets/images/ESP/hechizos/corrupcion/238.jpg', 'assets/images/ESP/hechizos/corrupcion/239.jpg'];
var fuegoImages = ['assets/images/ESP/hechizos/fuego/240.jpg', 'assets/images/ESP/hechizos/fuego/241.jpg', 'assets/images/ESP/hechizos/fuego/242.jpg', 'assets/images/ESP/hechizos/fuego/243.jpg', 'assets/images/ESP/hechizos/fuego/244.jpg', 'assets/images/ESP/hechizos/fuego/245.jpg'];
var inframundoImages = ['assets/images/ESP/hechizos/inframundo/246.jpg', 'assets/images/ESP/hechizos/inframundo/247.jpg', 'assets/images/ESP/hechizos/inframundo/248.jpg', 'assets/images/ESP/hechizos/inframundo/249.jpg', 'assets/images/ESP/hechizos/inframundo/250.jpg', 'assets/images/ESP/hechizos/inframundo/251.jpg'];
var interpretacionImages = ['assets/images/ESP/hechizos/interpretacion/252.jpg', 'assets/images/ESP/hechizos/interpretacion/253.jpg', 'assets/images/ESP/hechizos/interpretacion/254.jpg', 'assets/images/ESP/hechizos/interpretacion/255.jpg', 'assets/images/ESP/hechizos/interpretacion/256.jpg', 'assets/images/ESP/hechizos/interpretacion/257.jpg'];
var luzImages = ['assets/images/ESP/hechizos/luz/258.jpg', 'assets/images/ESP/hechizos/luz/259.jpg', 'assets/images/ESP/hechizos/luz/260.jpg', 'assets/images/ESP/hechizos/luz/261.jpg', 'assets/images/ESP/hechizos/luz/262.jpg', 'assets/images/ESP/hechizos/luz/263.jpg'];
var nigromanciaImages = ['assets/images/ESP/hechizos/nigromancia/264.jpg', 'assets/images/ESP/hechizos/nigromancia/265.jpg', 'assets/images/ESP/hechizos/nigromancia/266.jpg', 'assets/images/ESP/hechizos/nigromancia/267.jpg', 'assets/images/ESP/hechizos/nigromancia/268.jpg', 'assets/images/ESP/hechizos/nigromancia/269.jpg'];
var runicaImages = ['assets/images/ESP/hechizos/runica/270.jpg', 'assets/images/ESP/hechizos/runica/271.jpg', 'assets/images/ESP/hechizos/runica/272.jpg', 'assets/images/ESP/hechizos/runica/273.jpg', 'assets/images/ESP/hechizos/runica/274.jpg', 'assets/images/ESP/hechizos/runica/275.jpg'];
var tierraImages = ['assets/images/ESP/hechizos/tierra/276.jpg', 'assets/images/ESP/hechizos/tierra/277.jpg', 'assets/images/ESP/hechizos/tierra/278.jpg', 'assets/images/ESP/hechizos/tierra/279.jpg', 'assets/images/ESP/hechizos/tierra/280.jpg', 'assets/images/ESP/hechizos/tierra/288.jpg'];
var tribalImages = ['assets/images/ESP/hechizos/tribal/281.jpg', 'assets/images/ESP/hechizos/tribal/282.jpg', 'assets/images/ESP/hechizos/tribal/283.jpg', 'assets/images/ESP/hechizos/tribal/284.jpg', 'assets/images/ESP/hechizos/tribal/285.jpg', 'assets/images/ESP/hechizos/tribal/286.jpg'];

// Expansion
var favores_expImages = ['assets/images/ESP/hechizos_exp/favores_exp/353.jpg', 'assets/images/ESP/hechizos_exp/favores_exp/354.jpg', 'assets/images/ESP/hechizos_exp/favores_exp/355.jpg', 'assets/images/ESP/hechizos_exp/favores_exp/356.jpg', 'assets/images/ESP/hechizos_exp/favores_exp/357.jpg', 'assets/images/ESP/hechizos_exp/favores_exp/358.jpg', 'assets/images/ESP/hechizos_exp/favores_exp/359.jpg', 'assets/images/ESP/hechizos_exp/favores_exp/360.jpg', 'assets/images/ESP/hechizos_exp/favores_exp/361.jpg', 'assets/images/ESP/hechizos_exp/favores_exp/362.jpg'];
var mentalismo_expImages = ['assets/images/ESP/hechizos_exp/mentalismo_exp/363.jpg', 'assets/images/ESP/hechizos_exp/mentalismo_exp/364.jpg', 'assets/images/ESP/hechizos_exp/mentalismo_exp/365.jpg', 'assets/images/ESP/hechizos_exp/mentalismo_exp/366.jpg', 'assets/images/ESP/hechizos_exp/mentalismo_exp/367.jpg', 'assets/images/ESP/hechizos_exp/mentalismo_exp/368.jpg', 'assets/images/ESP/hechizos_exp/mentalismo_exp/369.jpg', 'assets/images/ESP/hechizos_exp/mentalismo_exp/370.jpg', 'assets/images/ESP/hechizos_exp/mentalismo_exp/371.jpg', 'assets/images/ESP/hechizos_exp/mentalismo_exp/372.jpg'];
var agua_expImages = ['assets/images/ESP/hechizos_exp/agua_exp/297.jpg', 'assets/images/ESP/hechizos_exp/agua_exp/298.jpg', 'assets/images/ESP/hechizos_exp/agua_exp/299.jpg', 'assets/images/ESP/hechizos_exp/agua_exp/300.jpg'];
var aire_expImages = ['assets/images/ESP/hechizos_exp/aire_exp/293.jpg', 'assets/images/ESP/hechizos_exp/aire_exp/294.jpg', 'assets/images/ESP/hechizos_exp/aire_exp/295.jpg', 'assets/images/ESP/hechizos_exp/aire_exp/296.jpg'];
var animismo_expImages = ['assets/images/ESP/hechizos_exp/animismo_exp/349.jpg', 'assets/images/ESP/hechizos_exp/animismo_exp/350.jpg', 'assets/images/ESP/hechizos_exp/animismo_exp/351.jpg', 'assets/images/ESP/hechizos_exp/animismo_exp/352.jpg'];
var bendiciones_expImages = ['assets/images/ESP/hechizos_exp/bendiciones_exp/309.jpg', 'assets/images/ESP/hechizos_exp/bendiciones_exp/310.jpg', 'assets/images/ESP/hechizos_exp/bendiciones_exp/311.jpg', 'assets/images/ESP/hechizos_exp/bendiciones_exp/312.jpg'];
var brujeria_expImages = ['assets/images/ESP/hechizos_exp/brujeria_exp/325.jpg', 'assets/images/ESP/hechizos_exp/brujeria_exp/326.jpg', 'assets/images/ESP/hechizos_exp/brujeria_exp/327.jpg', 'assets/images/ESP/hechizos_exp/brujeria_exp/328.jpg'];
var canalizacion_expImages = ['assets/images/ESP/hechizos_exp/canalizacion_exp/341.jpg', 'assets/images/ESP/hechizos_exp/canalizacion_exp/342.jpg', 'assets/images/ESP/hechizos_exp/canalizacion_exp/343.jpg', 'assets/images/ESP/hechizos_exp/canalizacion_exp/344.jpg'];
var control_expImages = ['assets/images/ESP/hechizos_exp/control_exp/345.jpg', 'assets/images/ESP/hechizos_exp/control_exp/346.jpg', 'assets/images/ESP/hechizos_exp/control_exp/347.jpg', 'assets/images/ESP/hechizos_exp/control_exp/348.jpg'];
var corrupcion_expImages = ['assets/images/ESP/hechizos_exp/corrupcion_exp/333.jpg', 'assets/images/ESP/hechizos_exp/corrupcion_exp/334.jpg', 'assets/images/ESP/hechizos_exp/corrupcion_exp/335.jpg', 'assets/images/ESP/hechizos_exp/corrupcion_exp/336.jpg'];
var fuego_expImages = ['assets/images/ESP/hechizos_exp/fuego_exp/289.jpg', 'assets/images/ESP/hechizos_exp/fuego_exp/290.jpg', 'assets/images/ESP/hechizos_exp/fuego_exp/291.jpg', 'assets/images/ESP/hechizos_exp/fuego_exp/292.jpg'];
var inframundo_expImages = ['assets/images/ESP/hechizos_exp/inframundo_exp/329.jpg', 'assets/images/ESP/hechizos_exp/inframundo_exp/330.jpg', 'assets/images/ESP/hechizos_exp/inframundo_exp/331.jpg', 'assets/images/ESP/hechizos_exp/inframundo_exp/332.jpg'];
var interpretacion_expImages = ['assets/images/ESP/hechizos_exp/interpretacion_exp/313.jpg', 'assets/images/ESP/hechizos_exp/interpretacion_exp/314.jpg', 'assets/images/ESP/hechizos_exp/interpretacion_exp/315.jpg', 'assets/images/ESP/hechizos_exp/interpretacion_exp/316.jpg'];
var luz_expImages = ['assets/images/ESP/hechizos_exp/luz_exp/317.jpg', 'assets/images/ESP/hechizos_exp/luz_exp/318.jpg', 'assets/images/ESP/hechizos_exp/luz_exp/319.jpg', 'assets/images/ESP/hechizos_exp/luz_exp/320.jpg'];
var nigromancia_expImages = ['assets/images/ESP/hechizos_exp/nigromancia_exp/321.jpg', 'assets/images/ESP/hechizos_exp/nigromancia_exp/322.jpg', 'assets/images/ESP/hechizos_exp/nigromancia_exp/323.jpg', 'assets/images/ESP/hechizos_exp/nigromancia_exp/324.jpg'];
var runica_expImages = ['assets/images/ESP/hechizos_exp/runica_exp/305.jpg', 'assets/images/ESP/hechizos_exp/runica_exp/306.jpg', 'assets/images/ESP/hechizos_exp/runica_exp/307.jpg', 'assets/images/ESP/hechizos_exp/runica_exp/308.jpg'];
var tierra_expImages = ['assets/images/ESP/hechizos_exp/tierra_exp/301.jpg', 'assets/images/ESP/hechizos_exp/tierra_exp/302.jpg', 'assets/images/ESP/hechizos_exp/tierra_exp/303.jpg', 'assets/images/ESP/hechizos_exp/tierra_exp/304.jpg'];
var tribal_expImages = ['assets/images/ESP/hechizos_exp/tribal_exp/337.jpg', 'assets/images/ESP/hechizos_exp/tribal_exp/338.jpg', 'assets/images/ESP/hechizos_exp/tribal_exp/339.jpg', 'assets/images/ESP/hechizos_exp/tribal_exp/340.jpg'];
        
function changeImage() {
    var select = document.getElementById("saberSelect");
    var selectedOption = select.value;
    var imageArray = [];
    
    if (selectedOption === "default") {
        showDefaultImages();
    } else if (selectedOption === "agua") {
        imageArray = includeExpansion ? aguaImages.concat(agua_expImages) : aguaImages;
        showImages(imageArray);
    } else if (selectedOption === "aire") {
        imageArray = includeExpansion ? aireImages.concat(aire_expImages) : aireImages;
        showImages(imageArray);
    } else if (selectedOption === "animismo") {
        imageArray = includeExpansion ? animismoImages.concat(animismo_expImages) : animismoImages;
        showImages(imageArray);
    } else if (selectedOption === "bendiciones") {
        imageArray = includeExpansion ? bendicionesImages.concat(bendiciones_expImages) : bendicionesImages;
        showImages(imageArray);
    } else if (selectedOption === "brujeria") {
        imageArray = includeExpansion ? brujeriaImages.concat(brujeria_expImages) : brujeriaImages;
        showImages(imageArray);
    } else if (selectedOption === "canalizacion") {
        imageArray = includeExpansion ? canalizacionImages.concat(canalizacion_expImages) : canalizacionImages;
        showImages(imageArray);
    } else if (selectedOption === "control") {
        imageArray = includeExpansion ? controlImages.concat(control_expImages) : controlImages;
        showImages(imageArray);
    } else if (selectedOption === "corrupcion") {
        imageArray = includeExpansion ? corrupcionImages.concat(corrupcion_expImages) : corrupcionImages;
        showImages(imageArray);
    } else if (selectedOption === "fuego") {
        imageArray = includeExpansion ? fuegoImages.concat(fuego_expImages) : fuegoImages;
        showImages(imageArray);
    } else if (selectedOption === "inframundo") {
        imageArray = includeExpansion ? inframundoImages.concat(inframundo_expImages) : inframundoImages;
        showImages(imageArray);
    } else if (selectedOption === "interpretacion") {
        imageArray = includeExpansion ? interpretacionImages.concat(interpretacion_expImages) : interpretacionImages;
        showImages(imageArray);
    } else if (selectedOption === "luz") {
        imageArray = includeExpansion ? luzImages.concat(luz_expImages) : luzImages;
        showImages(imageArray);
    } else if (selectedOption === "nigomancia") {
        imageArray = includeExpansion ? nigromanciaImages.concat(nigromancia_expImages) : nigromanciaImages;
        showImages(imageArray);
    } else if (selectedOption === "runica") {
        imageArray = includeExpansion ? runicaImages.concat(runica_expImages) : runicaImages;
        showImages(imageArray);
    } else if (selectedOption === "tierra") {
        imageArray = includeExpansion ? tierraImages.concat(tierra_expImages) : tierraImages;
        showImages(imageArray);
    } else if (selectedOption === "tribal") {
        imageArray = includeExpansion ? tribalImages.concat(tribal_expImages) : tribalImages;
        showImages(imageArray);
    }  else if (selectedOption === "favores") {
        imageArray = favores_expImages;
        showImages(imageArray);
    } else if (selectedOption === "mentalismo") {
        imageArray = mentalismo_expImages;
        showImages(imageArray);
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
    window.parent.location.href = "index.html";
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
