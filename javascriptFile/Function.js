/* function avg(...args){
    let sum = 0;
    for (const item of args){
         sum+=item;
    }
    return sum/ args.length;
} */

const avg =(...args) => {
    let sum = 0;
    for (const item of args){
         sum+=item;
    }
    return sum/ args.length;
}

console.log(avg(2,3,4));