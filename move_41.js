
const kompas = ["shimol", "sharq", "janub", "g'arb"];

// move() funksiyaga qayerda turganligi, qaysi tomonga nechi marta burilganligi beriladi.
// dastur ishlashini tekshirish uchun move() funksiyasiga berilgan qiymatlarni o'zgartiring.
const position = move(kompas, 3, 0, 1);

kompas.splice(position, 1, "Human");
console.log("\n", `     `, kompas[0], "\n\n", kompas[3], ` -|- `, kompas[1], `\n\n      `, kompas[2], "\n");

// pozition -> inson qaysi yo'nalishda turibdi;
// x -> kompas massivida berilgan yo'nalishda harakat qilish;
// turn -> x yo'nalishi bo'yicha necha marta burilish kerak;
function move(kompas, position, x, turn) {
    if ( position !== x && turn % 4 !== 0 ) {
        if (position === 0 && x === 3) {
            position -= turn;
            position %= 4;
            position = 4 + position;
        }
        else if ((position === 3 && x === 0) || (x - position) > 0) {
            position += turn;
            position %= 4;
        }
        else if ( (x - position) < 0 ){
            position -= turn;
            position %= 4;
        }
    }
    return position;
}
