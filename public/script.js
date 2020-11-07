let toggleClick = document.querySelector('.containerHeader').querySelector('.toggle').querySelector("img");
const numbersDrawn = [];

console.log(`The programm is using the method ${toggleClick.id}.`);

function changeMethod() {
    if (toggleClick.id == 1) {
        toggleClick.id = 2;
        toggleClick.src = "../assets/SecondaryToggle.svg";
    } else {
        toggleClick.id = 1
        toggleClick.src = "../assets/mainToggle.svg";
    } console.log(`The programm is using the method ${toggleClick.id}.`)
}

function checkValue(number) {
    if (number > 0 && number <= 60 && numbersDrawn.indexOf(number) === -1) {
        return true;
    }
};

function printResult(arrayResult) {
    document.querySelector("#winningNumbers").innerText = arrayResult.sort( (a,b) => a - b ).join(' - ');
}

// Second method: using javascript to generate a random number;
function secondMethod() {
    let cont = 0;
    while (cont<6) {
        let num = Math.floor( Math.random() * 60 + 1 );
        if (checkValue(num)) {
            numbersDrawn[cont] = num;
            cont++;
        };
    };
    printResult(numbersDrawn);
    console.log(numbersDrawn);
};

// First Method: Multiplicative Congruential
function firstMethod() {
    let seed  = GetMilliseconds = Date.now()%10000;
    let cont = 0;
    while (cont < 6) {

        let num = ((7**5)*seed)%(2**31 - 1); 

        seed = num;
        
        const firstNum = Math.floor( Math.random() * 9 ); 
        const secondNum = Math.floor( Math.random() * 9 ); 

        num = Number.parseInt(num.toString()[firstNum] + num.toString()[secondNum])
        
        if (checkValue(num)) {
            numbersDrawn[cont] = num;
            cont++;
        }
    };
    printResult(numbersDrawn)
    console.log(numbersDrawn)
};

function getDrawNumbers() {

    if (document.querySelector('#leftSide').style.background != 'none') {
        document.querySelector('#leftSide').style.background = 'none';
        document.querySelector('#leftSide').querySelector('h2').style = 'visibility: visible';
        document.querySelector('#leftSide').querySelector('p').style = 'visibility: visible';
        document.querySelector('#leftSide').querySelector('img').style = 'visibility: visible';

    }

    if (toggleClick.id == 1) {
        firstMethod();
    } else {
        secondMethod();
    }
}
