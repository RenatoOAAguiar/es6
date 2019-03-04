// Array Helper Methods

var colors = ['red', 'blue', 'green'];
var numbers = [1,2,3,4,5,6];
var numb = undefined;

//Functions

function add(number) {
    numb += number;
}

//foreach

colors.forEach(color =>{
    console.log(color);
});

//foreach passing function
numbers.forEach(add); //without ()

//Map
var carros = [
    { modelo: 'A', preco: 'Barato'},
    { modelo: 'B', preco: 'Caro'}
];

var precos = carros.map(function(car){
    return car.preco;
});

console.log(precos);
//['Barato', 'Caro']

//Filter
var produtos = [
    { nome: 'fanta', type: 'refrigerante'},
    { nome: 'maça', type: 'fruta'},
    { nome: 'coca', type: 'refrigerante'},
    { nome: 'abacate', type: 'fruta'}
];

var produtos_filtrados = [];

 
produtos.filter(function(produto){
    return produto.type === 'fruta'; //can be multiples conditions
});

// Result
// [{ nome: 'maça', type: 'fruta'},{ nome: 'abacate', type: 'fruta'}]


//FIND
// Diference for filter is: find get the firs occourrence

var users = [
    {name: "Renato"},
    {name: "Maria"},
    {name: "João"},
];

var user = users.find(function(user){
    return user.name === 'Renato';
});


//Every everyone must pass by verification, e.g validate multiples fields

var computers = [
    { name: "apple", ram: 24},
    { name: "Compaq", ram: 4},
    { name: "Acer", ram: 32},
];

computers.every(function(computer){
    return computer.ram > 16;
});


//Some return true if at least one is true
computers.some(function(computer){
    return computer.ram > 16;
});

//Another Things

function Field(value){
    this.value = value;
}

Field.prototype.validate = function(){
    return this.value.length >0;
};

var username = new Field("renato");

username.validate();


// REDUCE

var num = [1,2,4,10];

num.reduce(function(sum, number){
    return sum + number;
}, 10);


var colors = [
    { color: 'red'},
    { color: 'blue'},
    { color: 'yellow'}
];

colors.reduce(function(previous, color){
    previous.push(color.color);
    return previous;
}, []);

//Using reduce for balance

"()()()"

function balancedParens(text) {
    return !text.split("").reduce(function(previous, char){
        if (previous < 0) { return previous; }
        if (char === "(") { return ++previous; }
        if (char === ")") { return --previous; }
        return previous;
    }, 0);
}

balancedParens("())((");

