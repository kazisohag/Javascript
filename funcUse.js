var arr1 = [1,2,3]
var arr2 = [10,30,80]
var arr3 = [66,43,12]

function sumArr(x){
    var res = 0
    var i = 0
    for(i=i; i<x.length; i++){
        res += x[i]
    }
    
    return(res)

}

console.log(sumArr(arr1))
console.log(sumArr(arr2))
console.log(sumArr(arr3))
