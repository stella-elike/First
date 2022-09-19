const prompt=require('prompt-sync')();
var a=prompt("Enter a number:");
var b=prompt("Enter a number:");
if(a>b){
console.log("%d is greater than %d",a,b);
}
else{
console.log("%d is greater than %d",b,a);
}