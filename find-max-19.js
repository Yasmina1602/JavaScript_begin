 
    /*________ 1 - example ________ */

function returnMax(a, b){
    return (a > b) ?  a : b;
}
let max = returnMax( 16, 12 );
console.log( '\n     1 - EXAMPLE');
console.log( "The larger of the two numbers = " + max );

    /*________ 2 - example ________ */

function maxElement( arr ){
    let max = 0;
    for( let element of arr ){
        if ( element > max )
            max = element;
    } return max;
}

let array = [ 1,2,3,4,5,6,7 ];
console.log( '\n     2 - EXAMPLE');
console.log( "Largest of array elements = " + maxElement( array ) );

    /*________ 3 - example ________*/

function returnLargest(developers) {
    let max = 0;
    let index = 0;
    for (let i = 0; i < developers.length; i++) {
        if (developers[i].age > max) {
            max = developers[i].age;
            index = i;
        }
    }
    return index;
}

function Developer(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
}

let developers = [
    new Developer("Yasmina", 18, 2),
    new Developer("Jahongir", 20, 3),
    new Developer("Abdujalil", 24, 3),
    new Developer("Jasmina", 18, 1)
];

let oldestDeveloper = returnLargest( developers );
console.log( '\n     3 - EXAMPLE');
console.log("The oldest developer is " + developers[oldestDeveloper].name);

    /*________ 4 - example ________*/

function maxCost( Dishes ){
    let max = 0;
    let name;
    for( let value in Dishes ){
        if( max < Dishes[value] ){
            max = Dishes[value];
            name = value;
        }
    }
    return name;
}

const Dishes = { apple: 23, pear: 26, cucumber: 85, meat: 80, pineapple: 45 };
console.log( '\n     4 - EXAMPLE');
console.log( "The most expensive product in the new year = " + maxCost( Dishes ));

    /*________ 5 - example ________*/

function maxBit( arr ){
    let max = 0;
    let x ;
    for( let value of arr ){
        if( parseInt(value, 2) > max )
            max = parseInt(value, 2);
            x = value;
    } 
    return x;
}
const arrayBit = [ 1010, 10101, 101, 11, 1110011 ];
console.log( '\n     5 - EXAMPLE');
console.log( "the largest value in the binary number system = " + maxBit( arrayBit ) + "\n");
