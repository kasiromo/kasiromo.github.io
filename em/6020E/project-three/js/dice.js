let diceSet = {
    "d4": {
        name: "d4",
        description: "The four-sided die is used for small damage rolls and healing spells. It's pyramid-shaped and often used in magic-based attacks.",
        image: "img/d4.png"
    },
    "d6": {
        name: "d6",
        description: "The classic cube-shaped die, used in most tabletop games. In D&D, it's often used for weapon damage rolls.",
        image: "img/d6.png"
    },
    "d8": {
        name: "d8",
        description: "The eight-sided die is common for medium-damage weapons and spells. It's diamond shape helps it roll well on flat surfaces.",
        image: "img/d8.png"
    },
    "d10": {
        name: "d10",
        description: "The ten-sided die is versatile - often used for percentile rolls or abilities that require moderate damage values.",
        image: "img/d10.png"
    },
    "d12": {
        name: "d12",
        description: "This twelve-sided die is most often used for heavy weapons, like a greataxe. It's a favorite among D&D classes like Barbarians.",
        image: "img/d12.png"
    },
    "d20": {
        name: "d20",
        description: "The iconic twenty-sided dice determines fate! Used for attack rolls, saving throws, and ability checks - a true D&D classic.",
        image: "img/d20.png"
    }
};

function showDice(dieType) {
    let die = diceSet[dieType];
    document.querySelector('#description').innerHTML = `<strong>${die.description}</strong>`;
    document.querySelector('#diceImage').innerHTML = `<img src='${die.image}' alt='${die.name}' style='max-width: 200px;'>`;
}