const chances = {
    Money_Bag: 40,
    rubbish: 9,
    Melee_weapon: 25,
    Map: 5,
    potion: 10,
    Wearables: 10,
    Devil_Fruit: 1,
};

function selectItem() {
    const rand = Math.random() * 100;
    let cumulativeProb = 0;

    for (const item in chances) {
        cumulativeProb += chances[item];
        if (rand < cumulativeProb) {
            return item;
        }
    }
}

function unboxChest() {
    const chest = document.getElementById('chest');
    const itemContainer = document.getElementById('item');
    const result = document.getElementById('result');
    const resetButton = document.getElementById('reset-button');

    // Disable chest and reset button during animation
    chest.removeEventListener('click', unboxChest);
    resetButton.disabled = true;

    // Play animation by replacing chest image with GIF
    chest.style.backgroundImage = 'url(assets/Case_Open_Gif.gif)';

    // Delay result display for animation to complete
    setTimeout(() => {
        // Select an item
        const item = selectItem();

        // Display the item image
        itemContainer.style.backgroundImage = `url(assets/${item}.png)`;
        chest.style.backgroundImage = `url(assets/Chest_Open.png)`
        chest.style.cursor = "default"
        // Reset result and enable chest and reset button
        result.textContent = `You got: ${item}`;
        resetButton.style.cursor = "pointer"
        resetButton.disabled = false;
    }, 2700); // Adjust the delay time (in milliseconds) as needed
}

function resetChest() {
    const chest = document.getElementById('chest');
    const itemContainer = document.getElementById('item');
    const result = document.getElementById('result');

    // Reset chest image and result
    chest.style.backgroundImage = 'url(assets/Chest_closed.png)';
    itemContainer.style.backgroundImage = 'none';
    result.textContent = '';

    // Enable chest click event
    chest.addEventListener('click', unboxChest);
}

document.getElementById('chest').addEventListener('click', unboxChest);
document.getElementById('reset-button').addEventListener('click', resetChest);
