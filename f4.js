f=require('fs');
f.appendFile('examp.txt','I am from Nuzvid',function(err,msg){
if(err) 
	throw error;
else
	console.log("Append is succesful");
});