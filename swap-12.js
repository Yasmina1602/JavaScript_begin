
 
// UZ   
     /*  1 - do'kon eng arzon mahsulotlarni,
        2 - do'kon eng qimmat mahsulotlarni o'zida saqlasin */
// EN   
     /*  1 - store the cheapest products,
        2 - let the store keep the most expensive products
    */

const Dukon_1 = { 
    konserva : 20.5,
    oyinchoqlar : 19.5,
    gosht_mahsulotlari : 45.5,
    sutli_mahsulotlari : 15,
    unli_mahsulotlar : 10,
    qandolat_mahsulotlari : 30.5
};

const Dukon_2 = { ...Dukon_1 };

Dukon_2.konserva = 20,
Dukon_2.oyinchoqlar = 20;
Dukon_2.gosht_mahsulotlari = 50;
Dukon_2.sutli_mahsulotlari = 15.5;
Dukon_2.unli_mahsulotlar = 9;
Dukon_2.qandolat_mahsulotlari = 31;

let max = 0;

    for( let x in Dukon_1 ){
        if ( Dukon_1[x] > Dukon_2[x]){ 
            max = Dukon_1[x];
            Dukon_1[x] = Dukon_2[x];
            Dukon_2[x] = max;
        }
    }
    
console.log( "\n Eng qimmat mahsulotlar do'koni -> \n", Dukon_1, "\n",
             "\nEng arzon mahsulotlar do'koni -> \n", Dukon_2 );