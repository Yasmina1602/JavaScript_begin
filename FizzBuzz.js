
console.log("\n ___________________ FizzBuzz ___________________\n");
console.log("  If value = Fibonacci number, return Fizz\n",
            " If value = Triangle numbers, return Buzz\n",
            " If value = Fibonacci number && value = Triangle numbers, return FizzBuzz\n",
            " If value != Fibonacci number && value != Triangle numbers, return FizzBuzz\n",
            " If value != number, return ' Not number '\n"
);
console.log( " Fibonacci numbers -> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, .., ...\n");
console.log( " Triangle numbers - > 0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91, .., ...\n");

function Fibonacci( x ){
    let fib = 0;
    let fib_1 = 0;
    let fib_2 = 1;
    for( let i=0; i<30; i++){
        fib = fib_2;
        fib_2 += fib_1;
        fib_1 = fib;
        if( fib_2 === x ) return true;
    }   
    return false;
}

function Triangle( x ){
    let tri = 0;
    for( let i=0; i<30; i++){
        tri += i;
        if( tri === x ) return true; 
    } 
    return false;
}

function Fizzbuzz( x ){
    if( typeof x !== 'number' )
        return 'Not number';
    if( Fibonacci( x ) && Triangle( x ) )
        return 'FizzBuzz';
    if( Fibonacci( x ) )
        return 'Fizz';
    if( Triangle( x ) )
        return 'Buzz';
    return x;
}
console.log("  ___________________________\n","|                           |");

console.log( "     Result -> ", Fizzbuzz( 47 ),"\n");

console.log(" -----------------------------\n\n");

// comment : if Fizzbuzz( 21 ); return Fizzbuzz;
//           if Fizzbuzz( 'abc' ); return 'Not number';
//          and so on ... .