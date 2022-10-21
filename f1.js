f=require('fs');
f.writeFile('ex.txt','My name is Stella',function(err){
if(err) 
	throw error;
else
	console.log("Writing is succesful");
});