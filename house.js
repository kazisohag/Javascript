var n = 10
spc = ''
for(var i = 1; i <= n; i++){
    var result = ""
    
    for(var j = 1; j <= i; j++){

        for(var sp = n/2; sp>=n; sp--){
            spc += " "
        }
        
        result += spc + '*' + " " 
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