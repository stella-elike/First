const prompt=require('prompt-sync')();
var a=prompt("Enter a number:");
arm(a);
function arm(num){
var n=num;
var sum=0;
var d=0;
while(a>0){
d=a%10;
sum=sum+(d*d*d);
a=parseInt(a/10);
}
console.log(sum);
if(sum==n){
console.log("%d is Armstrong ",n);
}
else{
console.log("%d is Not Armstrong ",n);
}
}