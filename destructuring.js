var expense = {
    type: 'Business',
    amount: '$45 USD'
};

//var type = expense.type;
//var amount = expense.amount;

//ES6

//const { type } = expense;
//const { amount } = expense;

const { type, amount } = expense;


var savedFiled = {
    extension: 'jpg',
    name: 'repost',
    size: 14040
};

//function fileSummary(file) {
function fileSummary({name, extension, size}){
    return `The file ${name}.${extension} is of size ${size}`;
}

fileSummary(savedFiled);


//Destructuring array

const companies = [
    'Google',
    'Facebook',
    'Uber'
];

const [ name, name2, name3 ] = companies;


//same
const [ name4 ] = companies;
const nameE = companies[2];


const [ length ] = companies;

const [ name, name2, ...rest ] = companies;

const classes = [
    [ 'Chemistry', '9AM', 'Mr. Darnick' ],
    [ 'Physics', '10:15AM', 'Mrs. Lithun'],
    [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

classes.map(([subject, time, teacher]) => { 
	return {subject, time, teacher};
});