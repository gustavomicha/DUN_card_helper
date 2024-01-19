var counters = [];
var defaultImage = 'assets/images/ENG/spells/default.png';
var airImages = [
'assets/images/ENG/spells/air/air_elemental.png', 'assets/images/ENG/spells/air/burst_of_speed.png', 'assets/images/ENG/spells/air/immobilize.png', 'assets/images/ENG/spells/air/knock_down.png', 'assets/images/ENG/spells/air/lightning_bolt.png', 'assets/images/ENG/spells/air/shield_of_wind.png'
];
var animismImages = [
'assets/images/ENG/spells/animism/amber_statue.png', 'assets/images/ENG/spells/animism/breathe_life.png', 'assets/images/ENG/spells/animism/curse.png', 'assets/images/ENG/spells/animism/reveal_environment.png', 'assets/images/ENG/spells/animism/smell_enemies.png', 'assets/images/ENG/spells/animism/tough_skin.png'
];
var blessingsImages = [
'assets/images/ENG/spells/blessings/call_of_the_fenix.png', 'assets/images/ENG/spells/blessings/defender_of_truth.png', 'assets/images/ENG/spells/blessings/hammer_of_justice.png', 'assets/images/ENG/spells/blessings/healing_hands.png', 'assets/images/ENG/spells/blessings/heart_of_the_tiger.png', 'assets/images/ENG/spells/blessings/scourge_of_evil.png'
];
var channellingImages = [
'assets/images/ENG/spells/channelling/boiling_blood.png', 'assets/images/ENG/spells/channelling/detecting_evil.png', 'assets/images/ENG/spells/channelling/dexterity_enhancement.png', 'assets/images/ENG/spells/channelling/heal.png', 'assets/images/ENG/spells/channelling/immunity.png', 'assets/images/ENG/spells/channelling/placate_tempers.png'
];
var corruptionImages = [
'assets/images/ENG/spells/corruption/damage_mind.png', 'assets/images/ENG/spells/corruption/entrail_blast.png', 'assets/images/ENG/spells/corruption/great_tumors.png', 'assets/images/ENG/spells/corruption/inner_fire.png', 'assets/images/ENG/spells/corruption/marshy_ground.png', 'assets/images/ENG/spells/corruption/vile_vomit.png'
];
var earthImages = [
'assets/images/ENG/spells/earth/rain_of_stones.png', 'assets/images/ENG/spells/earth/restoring_earth.png', 'assets/images/ENG/spells/earth/stone_skin.png', 'assets/images/ENG/spells/earth/summon_elemental.png', 'assets/images/ENG/spells/earth/walkthrough.png', 'assets/images/ENG/spells/earth/wall_of_stone.png'
 ];
var fireImages = [
'assets/images/ENG/spells/fire/burning_fist.png', 'assets/images/ENG/spells/fire/fireball.png', 'assets/images/ENG/spells/fire/fire_elemental.png', 'assets/images/ENG/spells/fire/fire_wall.png', 'assets/images/ENG/spells/fire/flaming_weapon.png', 'assets/images/ENG/spells/fire/shin_of_fire.png']
;
var lightImages = [
'assets/images/ENG/spells/light/blast_of_light.png', 'assets/images/ENG/spells/light/clairvoyance.png', 'assets/images/ENG/spells/light/flashing_weapons.png', 'assets/images/ENG/spells/light/healing_light.png', 'assets/images/ENG/spells/light/holy_light.png', 'assets/images/ENG/spells/light/sheltering_light.png'
];
var musicImages = [
'assets/images/ENG/spells/music/charmer.png', 'assets/images/ENG/spells/music/deep_silence.png', 'assets/images/ENG/spells/music/distraction.png', 'assets/images/ENG/spells/music/illusionism.png', 'assets/images/ENG/spells/music/invigorating_tune.png', 'assets/images/ENG/spells/music/lacerating_melody.png'
];
var natureImages = [
'assets/images/ENG/spells/nature/beast_skin.png', 'assets/images/ENG/spells/nature/cloak_of_leaves.png', 'assets/images/ENG/spells/nature/furious_birds.png', 'assets/images/ENG/spells/nature/hunting_spear.png', 'assets/images/ENG/spells/nature/lord_of_the_beasts.png', 'assets/images/ENG/spells/nature/veil_of_thorns.png'
];
var necromancyImages = [
'assets/images/ENG/spells/necromancy/deadly_gaze.png', 'assets/images/ENG/spells/necromancy/fearsome.png', 'assets/images/ENG/spells/necromancy/fireball_blue.png', 'assets/images/ENG/spells/necromancy/leech_life.png', 'assets/images/ENG/spells/necromancy/raise_the_dead.png', 'assets/images/ENG/spells/necromancy/strength_of_the_dead.png'
];
var runicImages = [
'assets/images/ENG/spells/runic/accurate_attack.png', 'assets/images/ENG/spells/runic/earthquake.png', 'assets/images/ENG/spells/runic/lightning.png', 'assets/images/ENG/spells/runic/restore_wounds.png', 'assets/images/ENG/spells/runic/rune_of_strength.png', 'assets/images/ENG/spells/runic/rune_of_toughness.png'
];
var tribalImages = [
'assets/images/ENG/spells/tribal/arrows_what_arrows.png', 'assets/images/ENG/spells/tribal/brain_damage.png', 'assets/images/ENG/spells/tribal/frenzy.png', 'assets/images/ENG/spells/tribal/god_crush_them.png', 'assets/images/ENG/spells/tribal/green_flame.png', 'assets/images/ENG/spells/tribal/war_dance.png'
];
var underworldImages = [
'assets/images/ENG/spells/underworld/demonic_seduction.png', 'assets/images/ENG/spells/underworld/favour_of_the_gods.png', 'assets/images/ENG/spells/underworld/fire_of_chaos.png', 'assets/images/ENG/spells/underworld/infernal_possission.png', 'assets/images/ENG/spells/underworld/regeneration.png', 'assets/images/ENG/spells/underworld/whip_of_evil.png'
];
var waterImages = [
'assets/images/ENG/spells/water/crushing_wave.png', 'assets/images/ENG/spells/water/ice_arrows.png', 'assets/images/ENG/spells/water/ice_wall.png', 'assets/images/ENG/spells/water/treacherous_waters.png', 'assets/images/ENG/spells/water/water_elemental.png', 'assets/images/ENG/spells/water/water_of_life.png'
];
var witchcraftImages = [
'assets/images/ENG/spells/witchcraft/black_wings.png', 'assets/images/ENG/spells/witchcraft/dark_arrow.png', 'assets/images/ENG/spells/witchcraft/mind_control.png', 'assets/images/ENG/spells/witchcraft/poisonous_fumes.png', 'assets/images/ENG/spells/witchcraft/suffocation.png', 'assets/images/ENG/spells/witchcraft/summon_vermin.png'
];

function changeImage() {
    var select = document.getElementById('saberSelect');
    var selectedOption = select.value;

    if (selectedOption === 'default') {
        showDefaultImages();
    } else if (selectedOption === 'air') {
        showImages(airImages);
    } else if (selectedOption === 'animism') {
        showImages(animismImages);
    } else if (selectedOption === 'blessings') {
        showImages(blessingsImages);
    } else if (selectedOption === 'channelling') {
        showImages(channellingImages);
    } else if (selectedOption === 'corruption') {
        showImages(corruptionImages);
    } else if (selectedOption === 'earth') {
        showImages(earthImages);
    } else if (selectedOption === 'fire') {
        showImages(fireImages);
    } else if (selectedOption === 'light') {
        showImages(lightImages);
    } else if (selectedOption === 'music') {
        showImages(musicImages);
    } else if (selectedOption === 'nature') {
        showImages(natureImages);
    } else if (selectedOption === 'necromancy') {
        showImages(necromancyImages);
    } else if (selectedOption === 'runic') {
        showImages(runicImages);
    } else if (selectedOption === 'tribal') {
        showImages(tribalImages);
    } else if (selectedOption === 'underworld') {
        showImages(underworldImages);
    } else if (selectedOption === 'water') {
        showImages(waterImages);
    } else if (selectedOption === 'witchcraft') {
        showImages(witchcraftImages);
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
    window.parent.location.href = 'index_EN.html';
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