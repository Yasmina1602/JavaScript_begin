/*   0 - 50 : F
    51 - 60 : D
    61 - 70 : C
    71 - 80 : B
    81 - 100: A
*/
//  UZ 
/* yaxshi o'qiydigan talabalarni ajratib olib, Maxsus guruh tuzish */
//  EN
/* to create a special group by separating students who study well */

function Group(name, ball) {
    this.name = name;
    this.ball = ball;
}

let students = [
    new Group("Yasmina", [76, 92, 88, 76, 93]),
    new Group("Jahongir", [88, 67, 87, 77, 69]),
    new Group("Navruz", [60, 49, 51, 66, 90]),
    new Group("Axror", [81, 61, 78, 45, 79]),
    new Group("Murod", [45, 76, 89, 98, 67]),
    new Group("Gulmira", [76, 92, 88, 76, 93]),
    new Group("Asad", [88, 67, 87, 77, 69]),
    new Group("Firuz", [60, 49, 51, 66, 90]),
    new Group("Mahmud", [81, 61, 68, 45, 70]),
    new Group("Sabina", [45, 76, 89, 98, 67])
];

const MIDDLE = 70;
console.log("\n New special group -> \n");
middle(students);

function middle(students) {
    for (let person in students) {
        let sum = 0;
        for (let x of students[person].ball) {
            sum += x;
        }
        if (sum / 5 >= MIDDLE) {
            console.log(students[person].name);
        }
    }
}
console.log("\n");