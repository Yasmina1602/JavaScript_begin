
// Contest
// Agar ishtirokchilar orasida Yasmina topilsa, 
// 3 tadan ko'p masala ishlagan bo'lsa,
// xatolar soni 10 tadan kam bo'lsa, keyingi bosqichga o'tsin.
// Aks holda Error chiqarsin

let str = [
    '{"ism": "Nafisa", "misol": 2, "xato": 3}',
    '{"ism": "Nilufar", "misol": 1, "xato": 5}',
    '{"ism": "Nazokat", "misol": 9, "xato": 9}',
    '{"ism": "Nigina", "misol": 3, "xato": 11}',
    '{"ism": "Nargiza", "misol": 4, "xato": 5}',
    '{"ism": "Yasmina", "misol": 4, "xato": 9}',
    '{"ism": "Nasiba", "misol": 6, "xato": 9}'
];

toObj();

function toObj() {
    let natija = false;
    try {
        for (let x in str) {
            let test = JSON.parse(str[x]);
            if (test.ism === 'Yasmina' && test.misol > 3 && test.xato < 10) {
                natija = true;
                break;
            }
        }
        if (natija) {
            console.log("\n Keyingi bosqichga o'tdingiz :) \n");
        } else {
            throw new Error('Bundan barbir dasturchi chiqmaydi :( \n');
        }
    } catch (error) {
        console.log('\n Hamasi befoyda', error.message);
    }
}
