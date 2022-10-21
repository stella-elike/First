f=require('fs');
f.append('ex.txt','examp.txt',function(err,msg){
if(err) 
	throw error;
else
	console.log("Rename is succesful");
});