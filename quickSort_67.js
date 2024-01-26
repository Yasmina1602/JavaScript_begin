// Quick Sort Algorithm

function quickSort( arr ){
    if( arr.length < 2 )
        return arr;
    
    let rand = arr[Math.floor( Math.random() * arr.length )];
    let equal = [];
    let left = [];
    let right = [];

    for (let i of arr) {
        if( i < rand ){
            left.push( i );
        }else if ( i > rand ){
            right.push( i );
        }else{
            equal.push( i );
        }
    }
    let newArray = quickSort( left ).concat(equal).concat(quickSort( right ));
    return newArray;
}

const array = [ 550, 10, 4, 5, 90, 45, 1, 560, 1, 15];

console.log('\n before -> ', array);
console.log('\n after -> ', quickSort(array));