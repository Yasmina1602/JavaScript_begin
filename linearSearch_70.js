// Linear Search Algorithm

function linearSearch( arr, number ){
    for (let i=0; i<arr.length; i++) {
        if( arr[i] === number )
            return i;
    }
    return -1;
}

const array = [ 55, 1, 22, 4, 6, 10, 49 ];
const find = 10;
const result = linearSearch( array , find );
if( result !== -1)
    console.log(`\n Qidirilayotgan element index raqami ${result} \n`);
else{
    console.log(`\n Qidirilayotgan element topilmadi \n`);
}