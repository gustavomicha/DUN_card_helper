var counters = [];
// Initialize from localStorage, default to true if not set
var includeExpansion = localStorage.getItem("includeExpansion") !== "false";
var base_path_spell = "../../assets/images/ENG/spells/";
var base_path_spell_exp = "../../assets/images/ENG/spells_exp/";
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
    favor: [],
    mentalism: [],
};

var spellExpImages = {
    favor_exp: ['favor/Detect_Good_and_Evil.jpg', 'favor/Endurance.jpg', 'favor/Guided_Arrow.jpg', 'favor/Imperative_Order.jpg', 'favor/Mercy.jpg', 'favor/Repair.jpg', 'favor/Sacred_Flame.jpg', 'favor/Sanctuary.jpg', 'favor/Spirit_Scourge.jpg', 'favor/Trap_Detection.jpg'],
    mentalism_exp: ['mentalism/Confuse.jpg', 'mentalism/Freeze_Time.jpg', 'mentalism/Master_Wills.jpg', 'mentalism/Mental_Attack.jpg', 'mentalism/Mind_Burst.jpg', 'mentalism/Mirage.jpg', 'mentalism/Reading.jpg', 'mentalism/Telekinesis.jpg', 'mentalism/Teleport.jpg', 'mentalism/Unlock.jpg'],
    water_exp: ['water/Ice_Bridge.jpg', 'water/Walking_on_Water.jpg', 'water/Water_Shield.jpg', 'water/Water_Whip.jpg'],
    air_exp: ['air/Choke.jpg', 'air/Magic_Mist.jpg', 'air/Sneaking.jpg', 'air/Weightless.jpg'],
    animism_exp: ['animism/Elemental_aura.jpg', 'animism/Mimetism.jpg', 'animism/Override_Ostacles.jpg', 'animism/Will_Breaking.jpg'],
    blessings_exp: ['blessings/Divine_Energy.jpg', 'blessings/Fate.jpg', 'blessings/Risen_God.jpg', 'blessings/Sphere_of_Damnation.jpg'],
    witchcraft_exp: ['witchcraft/Break_Weapon.jpg', 'witchcraft/Cloack_of_shadows.jpg', 'witchcraft/Enhancing_Warrior.jpg', 'witchcraft/Invisible_Strike.jpg'],
    channelling_exp: ['channelling/Empower.jpg', 'channelling/Evanescence.jpg', 'channelling/Favourite.jpg', 'channelling/Heal_Imjuries.jpg'],
    nature_exp: ['nature/Animal_Sense.jpg', 'nature/Roots.jpg', 'nature/Summon_Great_Pet.jpg', 'nature/Summon_Pet.jpg'],
    corruption_exp: ['corruption/Bleeding.jpg', 'corruption/Hunger.jpg', 'corruption/Mind_Corruption.jpg', 'corruption/Panic.jpg'],
    fire_exp: ['fire/Burning Ground.jpg', 'fire/Firestorm.jpg', 'fire/Flamestrike.jpg', 'fire/Wound_Healing.jpg'],
    underworld_exp: ['underworld/Deathtouch.jpg', 'underworld/Fire_Ring.jpg', 'underworld/Summon_Demon.jpg', 'underworld/Summon_Imps.jpg'],
    music_exp: ['music/Heroic_Psalm.png', 'music/Lethal_Performance.jpg', 'music/Suggestion.jpg', 'music/Summon_Swarm.jpg'],
    light_exp: ['light/Demon_Bane.jpg', 'light/Great_Dispelling.jpg', 'light/Light_Aura.jpg', 'light/Light_Spear.jpg'],
    necromancy_exp: ['necromancy/Ethernal_Hatred.jpg', 'necromancy/Regeneration.jpg', 'necromancy/Soul_Leach.jpg', 'necromancy/Veil_of_Darkness.jpg'],
    runic_exp: ['runic/Dispellimg_Shield.jpg', 'runic/Lightning_Armor.jpg', 'runic/Paralizing_Mark.jpg', 'runic/Unbreakable.png'],
    earth_exp: ['earth/Gravity_Rocks.jpg', 'earth/Jade_Arrows.jpg', 'earth/Mud.jpg', 'earth/Stone_Bridge.jpg'],
    tribal_exp: ['tribal/Dance_of_the_Gods.jpg', 'tribal/Gazelle_Jump.jpg', 'tribal/Power_Sweep.jpg', 'tribal/War_Shield.jpg'],
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
        minusButton.onclick = (function (index) {
            return function () {
                updateCounter(-1, index);
            };
        })(i);

        var counterValue = document.createElement('span');
        counterValue.id = 'counter' + i;
        counterValue.textContent = '0';

        var plusButton = document.createElement('button');
        plusButton.classList.add('plus');
        plusButton.textContent = '+';
        plusButton.onclick = (function (index) {
            return function () {
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

    imageArray.forEach(function (imageSrc, index) {
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
        minusButton.onclick = (function (index) {
            return function () {
                updateCounter(-1, index);
            };
        })(index);

        var counterValue = document.createElement('span');
        counterValue.id = 'counter' + index;
        counterValue.textContent = '0';

        var plusButton = document.createElement('button');
        plusButton.classList.add('plus');
        plusButton.textContent = '+';
        plusButton.onclick = (function (index) {
            return function () {
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

window.onload = function () {
    showDefaultImages();
    document.getElementById('saberSelect').value = 'default';
};