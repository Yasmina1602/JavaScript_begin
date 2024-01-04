
/*  UZ  */   /* bir guruh odamlar orasidan , ish tajribasi 2 yildan oshgan qizlarni o'z guruhimizga qo'shib olish kerak */

/*  EN  */   /* among a group of people, it is necessary to add girls with more than 2 years of work experience to our group */

const People = {
    xabibova: 2,
    sayfullayeva: 1.5,
    alimov: 3,
    farruxov: 4,
    iskandarova: 2.5,
    salimova: 5,
    shakarov: 2
};

const Group = {};

const surname = "va";
const year = 2;

function find(People) {
    for (let person in People) {
        if ( check(person) && People[person] >= year ) {
            Group[person] = People[person];
        }
    }
}

function check(x) {
    return x.endsWith('va');
}

find(People);
console.log("\n", Group, "\n");
