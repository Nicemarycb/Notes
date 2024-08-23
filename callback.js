//CallBack Function
//--------------------------------------------------------------------------------

// - A callback function in JS is a function that is passed as an argument to another function
//  and is executed after a certain task is finished
// - callback are a way to ensure that certain code doesn't execute until a specific 
// task is completed,
//  allowing better control over the flow of our program
// - simply , A function is called inside another function


// SYNTAX
//---------------------------------------------------------------------------------

// function one(){
//     statement to be excuted
//     tw0();

// }
// function two(){
//     statment to be excuted
// }
// one();



//EXAMPLE
//--------------------------------------------------------------------------------
function first(name, callback){
    console.log("my name is :",name);
    callback();
}

function two(){

    console.log("this is the second function");
}
first("nice",two);