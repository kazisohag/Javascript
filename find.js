var myList = [19,8,4,3,10,44]

var res = myList.find(function(value, index){
    return value == 44
})

console.log(res)

var Srcindex = myList.findIndex(function(value , index){
    return value == 44
})

console.log(Srcindex)


function myFind(arr, cb){
    for (var i=0; i<arr.length; i++){
        if(cb(arr[i])){
            return arr[i]
        }
    }
}



function myIndx(arr, cb){
    for (var i=0; i<arr.length; i++){
        if(cb(arr[i])){
            return i
        }
    }
}


var lastV = myFind(myList, function(value){
    return value == 44
})

console.log(lastV)


var lastIn = myIndx(myList, function(value){
    return value == 44
})

console.log(lastIn)