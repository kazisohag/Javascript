function cbtest(x,y,cb){
    var a = x + y
    var b = x - y

    var res = cb(a,b)

    return res
}


var res1 = cbtest(8, 9, function(a,b){
    var t1 = a + b
    return t1
})

console.log(res1)

var res2 = cbtest(8, 9, function(a,b){
    var t2 = a - b
    return t2
})

console.log(res2)

var res3 = cbtest(8, 9, function(a,b){
    var t3 = a * b
    return t3
})

console.log(res3)

var res4 = cbtest(8, 9, function(a,b){
    var t4 = a / b
    return t4
})

console.log(res4)