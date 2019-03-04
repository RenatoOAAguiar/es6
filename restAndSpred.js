//accept multiples arguments, putting in array
function addNumbers(...numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
}

addNumbers(1,2,3,4,5,6);


//-----------------------------------//

const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];

defaultColors.concat(userFavoriteColors);

//Same
[ 'blue', ...fallColors,  ...defaultColors, ...userFavoriteColors];