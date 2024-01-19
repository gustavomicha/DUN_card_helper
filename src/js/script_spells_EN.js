var counters = [];
var base_path_spell = "../../assets/images/ENG/spells/";
var defaultImage = base_path_spell + '/default.png';

var spellImages = {
    air: [
    'air/air_elemental.png', 'air/burst_of_speed.png', 'air/immobilize.png', 'air/knock_down.png', 'air/lightning_bolt.png', 'air/shield_of_wind.png'
    ],
    animism: [
    'animism/amber_statue.png', 'animism/breathe_life.png', 'animism/curse.png', 'animism/reveal_environment.png', 'animism/smell_enemies.png', 'animism/tough_skin.png'
    ],
    blessings: [
    'blessings/call_of_the_fenix.png', 'blessings/defender_of_truth.png', 'blessings/hammer_of_justice.png', 'blessings/healing_hands.png', 'blessings/heart_of_the_tiger.png', 'blessings/scourge_of_evil.png'
    ],
    channelling: [
    'channelling/boiling_blood.png', 'channelling/detecting_evil.png', 'channelling/dexterity_enhancement.png', 'channelling/heal.png', 'channelling/immunity.png', 'channelling/placate_tempers.png'
    ],
    corruption: [
    'corruption/damage_mind.png', 'corruption/entrail_blast.png', 'corruption/great_tumors.png', 'corruption/inner_fire.png', 'corruption/marshy_ground.png', 'corruption/vile_vomit.png'
    ],
    earth: [
    'earth/rain_of_stones.png', 'earth/restoring_earth.png', 'earth/stone_skin.png', 'earth/summon_elemental.png', 'earth/walkthrough.png', 'earth/wall_of_stone.png'
     ],
    fire: [
    'fire/burning_fist.png', 'fire/fireball.png', 'fire/fire_elemental.png', 'fire/fire_wall.png', 'fire/flaming_weapon.png', 'fire/shin_of_fire.png']
    ,
    light: [
    'light/blast_of_light.png', 'light/clairvoyance.png', 'light/flashing_weapons.png', 'light/healing_light.png', 'light/holy_light.png', 'light/sheltering_light.png'
    ],
    music: [
    'music/charmer.png', 'music/deep_silence.png', 'music/distraction.png', 'music/illusionism.png', 'music/invigorating_tune.png', 'music/lacerating_melody.png'
    ],
    nature: [
    'nature/beast_skin.png', 'nature/cloak_of_leaves.png', 'nature/furious_birds.png', 'nature/hunting_spear.png', 'nature/lord_of_the_beasts.png', 'nature/veil_of_thorns.png'
    ],
    necromancy: [
    'necromancy/deadly_gaze.png', 'necromancy/fearsome.png', 'necromancy/fireball_blue.png', 'necromancy/leech_life.png', 'necromancy/raise_the_dead.png', 'necromancy/strength_of_the_dead.png'
    ],
    runic: [
    'runic/accurate_attack.png', 'runic/earthquake.png', 'runic/lightning.png', 'runic/restore_wounds.png', 'runic/rune_of_strength.png', 'runic/rune_of_toughness.png'
    ],
    tribal: [
    'tribal/arrows_what_arrows.png', 'tribal/brain_damage.png', 'tribal/frenzy.png', 'tribal/god_crush_them.png', 'tribal/green_flame.png', 'tribal/war_dance.png'
    ],
    underworld: [
    'underworld/demonic_seduction.png', 'underworld/favour_of_the_gods.png', 'underworld/fire_of_chaos.png', 'underworld/infernal_possission.png', 'underworld/regeneration.png', 'underworld/whip_of_evil.png'
    ],
    water: [
    'water/crushing_wave.png', 'water/ice_arrows.png', 'water/ice_wall.png', 'water/treacherous_waters.png', 'water/water_elemental.png', 'water/water_of_life.png'
    ],
    witchcraft: [
    'witchcraft/black_wings.png', 'witchcraft/dark_arrow.png', 'witchcraft/mind_control.png', 'witchcraft/poisonous_fumes.png', 'witchcraft/suffocation.png', 'witchcraft/summon_vermin.png'
    ],
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
    } else if (spellImages[selectedOption]) {
        imageArray = prependBasePath(spellImages[selectedOption], base_path_spell);
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
    var counterElement = document.getElementById('counter' + index);
    counterElement.textContent = counters[index].toString();
}


function resetCounters() {
    for (var i = 0; i < counters.length; i++) {
        counters[i] = 0;
        updateCounterDisplay(i);
    }
}

function goToMainMenu() {
    window.parent.location.href = '../../index_EN.html';
}

function showDefaultImages() {
    var scrollableContainer = document.getElementById('scrollableContainer');
    scrollableContainer.innerHTML = '';

    for (var i = 0; i < 6; i++) {
        
        var imageWrapper = document.createElement('div');
        imageWrapper.classList.add('imageWrapper');

        var image = document.createElement('img');
        image.src = defaultImage;
        image.alt = '';

        imageWrapper.appendChild(image); // Append the image to the imageWrapper
        scrollableContainer.appendChild(imageWrapper); // Append the imageWrapper to the scrollableContainer
    }
}


function manageCounters() {
    var scrollableContainer = document.getElementById('scrollableContainer');
    scrollableContainer.innerHTML = '';

    for (var i = 0; i < 5; i++) {
        counters[i] = 0; // Initialize counters with 0
        updateCounterDisplay(i);

        var counter = document.createElement('div');
        counter.classList.add('counter');

        var minusButton = document.createElement('button');
        minusButton.classList.add('minus');
        minusButton.textContent = '-';
        minusButton.onclick = (function(index) {
            return function() {
                updateCounter(-1, index);
            };
        })(i);

        var counterValue = document.createElement('span');
        counterValue.id = 'counter' + i;
        counterValue.textContent = '0';

        var plusButton = document.createElement('button');
        plusButton.classList.add('plus');
        plusButton.textContent = '+';
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
    var scrollableContainer = document.getElementById('scrollableContainer');
    scrollableContainer.innerHTML = '';

    counters = new Array(imageArray.length).fill(0); // Initialize counters array with 0s

    imageArray.forEach(function(imageSrc, index) {
        var imageWrapper = document.createElement('div');
        imageWrapper.classList.add('imageWrapper');

        var image = document.createElement('img');
        image.src = imageSrc;
        image.alt = '';

        var counter = document.createElement('div');
        counter.classList.add('counter');

        var minusButton = document.createElement('button');
        minusButton.classList.add('minus');
        minusButton.textContent = '-';
        minusButton.onclick = (function(index) {
            return function() {
                updateCounter(-1, index);
            };
        })(index);

        var counterValue = document.createElement('span');
        counterValue.id = 'counter' + index;
        counterValue.textContent = '0';

        var plusButton = document.createElement('button');
        plusButton.classList.add('plus');
        plusButton.textContent = '+';
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
    document.getElementById('saberSelect').value = 'default';
};