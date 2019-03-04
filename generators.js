//Enter and exit all the time
//function*

/* function* shopping() {
    yield 'cash';
}

const gen = shopping();
gen.next();
gen.next(); */

function* colors() {
    yield 'red';
    yield 'blue';
    yield 'green';
}

const myColors = [];

for (const color of colors()) {
    myColors.push(color);
}

myColors;