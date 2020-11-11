var list = [1,3,7,9,3,5,6,0,11,20,30,33,31,56,98]
var src = Math.round(Math.random()*100)
var khoj = false

console.log(" ")
for(var i = 0; i < list.length; i++){

    if(list[i] === src){

        khoj = true
        console.log(src + ' is found in your list.')
        break
        
    }else{
        khoj = false
    }
}

if(khoj == false){
    console.log(src + ' is not found in your list.')
}

console.log(" ")