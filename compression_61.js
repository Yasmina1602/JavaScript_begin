class People {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    static compression(people) {
        let count = 0;
        let string = '';
        for (let i = 0; i < people.length - 1; i++) {
            count++;
            if (people[i]._name !== people[i + 1]._name) {
                string += people[i]._name + count + ' ';
                count = 0;
            }
        }
        string += people[people.length - 1]._name + (count + 1) + '\n';
        return string;
    }
}

let person1 = new People('Yasmina', 18);
let person2 = new People('Javohir', 20);
let person3 = new People('Suxrob', 21);
let person4 = new People('Suxrob', 15);
let person5 = new People('Gulmira', 22);
let person6 = new People('Gulmira', 25);

console.log('\n', People.compression([person1, person2, person3, person4, person5, person6]));
