
let primes = [];

function isPrime( x ){
    for( let i = 0; i <= x; i++ ){
        if( (i % 2 != 0) && (i % 3 != 0) && (i % 5 != 0) ){
            primes.push( i );
        }
    } 
}

isPrime( 90 );
console.log( "\n", primes, "\n" );
