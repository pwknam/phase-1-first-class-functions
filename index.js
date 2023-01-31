function receivesAFunction(callBack){
    callBack();
}

function returnsAnAnonymousFunction(){
    return () => {
        console.log(" ");
    }
}

function highFive() { 
    return "yeah!"; 
}

function returnsANamedFunction(){
    return highFive;
}