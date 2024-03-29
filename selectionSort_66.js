// Selection Sort Algorithm

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

const array = [ 550, 10, 4, 5, 90, 45, 1, 560, 1, 15];

console.log('\n before -> ', array);
console.log('\n after -> ', selectionSort(array));
