var list = ['a','g','t','w','d','v','b']
var src = 'x'
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