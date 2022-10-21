f=require('fs');
f.unlink('ex1.txt',function(err,msg){
if(err) 
	throw error;
else
	console.log("Delete is succesful");
});