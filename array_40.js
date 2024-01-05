
        /* 1 - example */

console.log( print( 'n', 'y' ) );

function print( x, y ){
    x = x.charCodeAt(0);
    y = y.charCodeAt(0);
    let result = [];
    for( let i=x; i<=y; i++ ){
        result.push( String.fromCharCode(i));
    }
    return result;
}

        /* 2 - example */

function Person(name, age, isMarried) {
  this.name = name;
  this.age = age;
  this.isMarried = isMarried;
}

let person_1 = new Person('Yasmina', 18, false);
let person_2 = new Person('Gulmira', 18, false);
let person_3 = new Person('Gulandom', 26, true);
let person_4 = new Person('Masxaraboz', 20, false);

let peopleArray = [person_1, person_2, person_3, person_4];

let foundIndex = Find('Masxaraboz', peopleArray);

function Find(name, peopleArray) {
  for (let i = 0; i < peopleArray.length; i++) {
    if (name === peopleArray[i].name) {
      return i;
    }
  }
  return -1; 
}

console.log("\n", peopleArray [foundIndex], "\n" ); 
