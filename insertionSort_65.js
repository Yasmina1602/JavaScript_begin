// Insertion Sort is a sorting algorithm that places the input element at its suitable place in each pass

function insertionSort( arr ){
    for( let i = 1; i < arr.length; i++ ){
        let element = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > element) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = element;
    }
    return arr;
}

const array = [ 10, 4, 5, 90, 45, 560, 1, 15 ];

console.log( '\n before -> ', array );
console.log( '\n after -> ', insertionSort( array ));