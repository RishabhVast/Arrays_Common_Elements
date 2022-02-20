// THE VARIABLE var is functioned scoped
if(true){

    var myVariable = "this is true";

}
// we can call  the variables var out of the block as it is an functioned scope variable
console.log(myVariable);


// THE VARIABLE let and cosnt are the block scoped variables.

if(true){

    let newVariable = "this is false";
    // we cannot call the let and const variables out of the block
    console.log(newVariable)
   }



   var sports = "cricket";
   var sports = "football";

// we cannot override the let constant value if  it is assigned  it will give error 
// SyntaxError: Identifier 'surName' has already been declared

let surName = "singh"
var Name = "mehta"

