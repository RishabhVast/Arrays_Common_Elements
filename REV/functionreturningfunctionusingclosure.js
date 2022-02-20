function delayGreeting(message){

    let closureFn = function (){
        console.log(message)

    }
    console.dir(closureFn);
    setTimeout(closureFn ,2000);

}
delayGreeting()

/// function retirned from a function is closure
// function passed as an argument is a closure
//function passed as a parameter is a closure
