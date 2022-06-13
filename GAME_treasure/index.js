'use strict';
// сделать счетчик
// попап с сообщением о победе или о проигрыше
// повтор игры

let hiddenTreasure;
const map = document.getElementById('map');
const hints = [
    { text: 'FOUND!', color: 'salmon' },
    { text: 'HOT!', color: 'red' },
    { text: 'WARM!', color: 'orange' } ,
    { text: 'COLD!', color: 'skyblue' },
    { text: 'WINTER IS COMING!', color: 'blue' }
];

map.addEventListener('load', () => {
    hiddenTreasure = generateCoords(map);
    Object.freeze(hiddenTreasure);
});

map.addEventListener('click', mapClickHandler);

function generateCoords ({height, width}) {
    const hGap = Math.round((width / 100 * 10));
    const vGap = Math.round((height / 100 * 10));

    return {
        x: Math.floor(Math.random() * (width - hGap * 2) + hGap ),
        y: Math.floor(Math.random() * (height - vGap * 2) + vGap )
    }
}

function getLengthBetweenPoints (p1, p2) {
    return Math.sqrt( (p1.x - p2.x)**2 + (p1.y - p2.y)**2 );
}

function mapClickHandler (e) {
    const clickCoord = {
        x: e.offsetX,
        y: e.offsetY
    };

    const clickLength = getLengthBetweenPoints(clickCoord, hiddenTreasure);
    const hintNumber = getHint(clickLength);
    const hint = hints[hintNumber];
    showHint(hint);    

    if (hintNumber === 0) {
        e.target.removeEventListener('click', mapClickHandler);
        showTreasure(clickCoord);
        // showPopup();
        // animate popup and treasure
    } 
}

function showTreasure ({x, y}) {
    const wrapper = document.getElementById('mapWrapper');

    const img = document.createElement('img');
    img.src = './img/treasure.png';
    img.style.width = '150px';
    img.style.position = 'absolute';
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
    img.style.transform = 'translate(-50%, -50%)';

    wrapper.append(img);
}

function showHint (hint) {

    const hintContainer = document.getElementById('hint');

    hintContainer.textContent = hint.text;
    hintContainer.style.color = hint.color;
}

function getHint (length) {
    if (length < 20) {
        return 0;
    } else if (length < 40) {
        return 1;
    } else if (length < 60) {
        return 2;
    } else if (length < 80) {
        return 3;
    } else {
        return 4;
    }
}