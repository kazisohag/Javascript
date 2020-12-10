var Obj1 = {
    a : 67,
    b : 65
}

var Obj2 = {
    a : 67,
    b : 65
}

var x = JSON.stringify(Obj1) == JSON.stringify(Obj2)

console.log(x)