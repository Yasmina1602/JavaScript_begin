
        /* Programming competition */

/*  EN  */ /* 40 minutes are given for each question. 
              1 fine will be charged for every 5 minutes that are exceeded. 
              When the number of errors reaches 12, the participant is excluded from the competition.
*/
/*  UZ  */ /* Har bir masala uchun 40 daqiqa vaqt beriladi. 
              Undan ortgan har bir 5 daqiqa uchun 1 ta  jarima yoziladi. 
              Jarimalar soni 12 ga yetganda ishtirokchi musobaqadan chetlashtiriladi.
*/

const TIME = 40;
const POINT = 5;
const MAX_POINT = 12;

 check( 100 );

function check( x ){
    if( x < TIME + POINT ){
        console.log("\n OK \n");
    }
    else{
        const result = Math.floor ((x - TIME) / POINT);
        result < MAX_POINT ? console.log("\n", result, "\n") : console.log( "\n Excluded from the competition \n");
    }
}