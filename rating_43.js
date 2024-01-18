// Robocontest
// Reytingi 2000 dan yuqori va darajasi 10 dan yuqori bo'lgan foydalanuvchilarni toping

const people = [
    { person: 'Asilbek Sunnatov', rating: 2572, rank: 1 },
    { person: 'Dilshodbek Xo\'jayev', rating: 2553, rank: 2 },
    { person: 'sharofiddin', rating: 1705, rank: 138 },
    { person: 'Avulov Aminjon', rating: 1730, rank: 121 },
    { person: 'Saidjalol Hasanov', rating: 2107, rank: 21 },
    { person: '1mperator', rating: 2115, rank: 20 },
    { person: 'Jaxongir Qayumjonov', rating: 2227, rank: 10 },
    { person: 'Husayn Hasanov', rating: 2289, rank: 6 }
];

let result = people
    .filter(x => x.rank <= 10 && x.rating >= 2000)
    .sort((x, y) => x.rank - y.rank)
    .reverse()
    .map( x => x.person )
console.log("\n Natija =>", result.join(', '), '\n');