var n = 10
for(var i = 1; i <= n; i++){
    var result = ""
    for(var j = 1; j <= i; j++){
        result += '*' + " "
    }
    console.log(result)
}

console.log(" ")

for(var k = 1; k<=n; k++){
    var total = ""
    for(var l = 1; l<=n; l++){
        total += '*' + ' '
    }
    console.log(total)
}