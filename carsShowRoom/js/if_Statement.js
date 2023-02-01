let a=45
let b=233
let c=-8
console.log("1. Conditional operator IF")
console.log(`a=${a}`);
console.log(`b=${b}`);
console.log(`c=${c}`);
console.log("Biggest number: "+ (a>(max=(b>c?b:c))?a:max))
console.log("Smallest number: "+ (a<(min=(b<c?b:c))?a:min))