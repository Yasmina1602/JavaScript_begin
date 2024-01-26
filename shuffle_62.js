// The Fisher–Yates shuffle is an algorithm for shuffling a finite sequence

function shuffle( k ){
    let key = k.split('');
    for( let i = key.length - 1; i > 0; i-- ){
        let temp = key[i];
        let rand = Math.floor(Math.random() * (i+1));
        key[i] = key[rand];
        key[rand] = temp;
    }
    let lock = key.join('');
    return lock;
}

const key = 'Yasmina Xabibova';
const lock = shuffle( key );
console.log( lock );