
function Prezident ( name, start, finish ){
    this.name = name;
    this.start = start;
    this.finish = finish;
}

let prezident = [
    new Prezident("George Washington", 1789, 1797 ),
    new Prezident("John Adams", 1797, 1801 ),
    new Prezident("Thomas Jefferson", 1801, 1809 ),
    new Prezident("James Madison", 1809, 1817 ),
    new Prezident("James Monroe", 1817, 1825 ),
    new Prezident("John Quincy Adams", 1825, 1829 )    
];

console.log("\n Amerikani eng ko'p boshqargan prezident ->\n", prezident[calculateYear( prezident )], '\n');

function calculateYear( prezident ){
    let max = 0;
    let index;
    for( let i = 0; i < prezident.length; i++ ){
        let x = prezident[i].finish - prezident[i].start;
        if( x > max ){
            max = x;
            index = i;
        }
    }
    return index;
}