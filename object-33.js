

/*  UZ  */ // obyekt yaratishning 3 xil usuli

/*  EN  */ // 3 different ways to create an object

        /*  1 - example */

function Person ( name, surname, age, birthDate, job, interests_and_income){
    this.name = name,
    this.surname = surname,
    this.age = age,
    this.birthDate = birthDate,
    this.job = job,
    this.interests_and_income = interests_and_income,
    this.status = function() {
        console.log( ' Very good ');
    } 
}

let person1 = new Person( 'Yasmina', 'Xabibova', 18, 16.02, null, { cpp: 200, python: 100, js: 50, php: 230 }, '');
console.log("\n New person properties ->\n", person1 );

    /* 2 - example */

let Market = {
    name: 'Uzum',
    year: 2019,
    address: 'Toshkent',
    branches: 10,
    products: [ 'dishes', 'equipment', 'jewelry', 'devices', 'toys' ],
    income: 50.3,
    status: function() {
        console.log( ' Very good ');
    }
};

console.log("\n Market properties ->\n", Market );

    /* 3 - example */

function University( name, year, branches, students, address ){
    return {
        name,
        year,
        branches,
        students, 
        address,
        status(){
            console.log( ' Very good ');
        }
    }
}
let university_1 = University( 'SamDu', 1918, 4, { direction: 'software engineering', course: 2, state: 'Navoiy' }, 'Samarkand');
console.log( "\n New univarsity properties ->\n", university_1 );