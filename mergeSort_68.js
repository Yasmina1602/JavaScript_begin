// Merge Sort Algorithm

function mergeSort( arr ){
    if( arr.length < 2)
        return arr;
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr. slice(middle);

    return merge( mergeSort( left ), mergeSort( right ));
}
function merge( left, right ){
    let result = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return [...result, ...left, ...right];
}

const array = [ 550, 10, 4, 5, 90, 45, 1, 560, 1, 15];

console.log('\n before -> ', array);
console.log('\n after -> ', mergeSort(array));