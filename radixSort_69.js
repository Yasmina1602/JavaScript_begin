// Radix Sort Algorithm

function radixSort(arr) {
    let maxSize = maxDigitSize(arr);
    
    for (let i = 0; i < maxSize; i++) {
        let array = []; 
        
        for (let j = 0; j < arr.length; j++) {
            let digit = 0;
            let number = arr[j].toString().split('').map(Number);
            if (number.length > i){
                digit = number[number.length - 1 - i];
            }
            if (!array[digit]){
                array[digit] = [];
            }
            array[digit].push(arr[j]);
        }
        arr = array.flat();
    }
    return arr;
}
function maxDigitSize(arr) {
    let max = 0;
    for (let i of arr) {
        let size = Math.floor(Math.log10(i)) + 1;
        if (max < size)
            max = size;
    }
    return max;
}

const array = [550, 10, 4, 5555, 90, 45, 1, 560, 1, 15, 11, 1000];

console.log('\nbefore -> ', array);
console.log('\nafter  -> ', radixSort(array));
