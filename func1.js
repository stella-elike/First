const prompt=require('prompt-sync')();
var a=prompt("Enter a number:");
evenodd(a);
function evenodd(x){
for(i=0;i<=x;i++){
if(i%2==0){
console.log("%d is even",i);
}
else{
console.log("%d is odd",i);
}
}
}