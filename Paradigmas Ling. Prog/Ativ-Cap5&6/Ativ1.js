x = 10

function f(num){
    console.log(x)
}

function g(){
    x=20
    f(x)
}

g()