// Bubble sort is a basic algorithm for arranging a string of numbers or other elements in the correct order

function bubbleSort( arr ){
    let bool = true;
    while ( bool ){
        bool = false;
        for( let i = 0; i < arr.length; i++ ){
            if( arr[i] > arr[i+1] ){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                bool = true;
            }
        }
    }
    return arr;
}

const array = [ 10,4,5,90,45,560 ];

console.log( '\n before -> ', array );
console.log( '\n after -> ', bubbleSort( array ));