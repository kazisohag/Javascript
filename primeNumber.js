var test = Math.round(Math.random() * 100)
var res = 0
var arr = []

for(var i = 2; i<test; i++){
    if(test % i == 0){
        arr.push(i)
    }
}

if(arr.length == 0){
    console.log(test + ' is a prime number..........')
}

else{
    console.log(test + ' is not a prime number..........')
}
