function recR(n){
    if(n % 2 == 0 && n < 6){
        console.log("It's Stop")
        return 
    }else{
        var spc = "I am trying only for you........."
        console.log(spc + n)
        recR(n-1)
    }


}

v = Math.round(Math.random() + 10-1)
recR(v)