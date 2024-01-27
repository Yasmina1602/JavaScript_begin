// Binary Search ALgorith

function binarySearch( arr, find ){
    let left = 0;
    let right = arr.length - 1;
    while( left <= right ){
        let middle = Math.floor((left + right) / 2);
        if( find === arr[middle] ){
            return middle;
        }
        else if( find > arr[middle] ){
            left = middle + 1;
        }
        else{
            right = middle - 1;
        }
    }
    return -1;
}

const array = [ 1, 3, 3, 5, 7, 8, 11, 12, 16, 20 ]; // must be a sorted array
const find = 16;
const result = binarySearch( array , find );
if( result !== -1)
    console.log(`\n Qidirilayotgan element index raqami ${result} \n`);
else{
    console.log(`\n Qidirilayotgan element topilmadi \n`);
}