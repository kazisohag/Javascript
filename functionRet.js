function pw(p){
    function num(n){
        var result = 1
        for(var i = 0; i<p; i++){
            result *= n
            
        }

        return result

    
    }
    return num
}

var power1 = pw(5)
console.log(power1(4))


var power1 = pw(4)
console.log(power1(4))


var power1 = pw(3)
console.log(power1(4))


var power1 = pw(2)
console.log(power1(4))