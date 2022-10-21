// Node.js program to demonstrate the    
// crypto.createHash() method
 
// Includes crypto module
const crypto = require('crypto');
 
// Defining key
const secret = 'Hi';
 
// Calling createHash method
const hash = crypto.createHash('sha256', secret)
                    
                   // updating data
                   .update('How are you?')
 
                   // Encoding to be used
                   .digest('hex');
 
// Displays output
console.log(hash);