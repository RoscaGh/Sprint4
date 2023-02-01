a = 5
b = 31

let sum=0
console.log("3. Loop statement");
console.log(`a=${a}`);
console.log(`b=${b}`);

for(i=a;i<=b;i++)
sum+=i%2==0?i:0;
console.log(`Sum of even numbers sum=${sum}`)