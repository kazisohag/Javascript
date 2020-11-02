while(true){
    var think = Math.round(Math.random()*100)
    if(think < 80){

        console.log("Your lucky Number : " + think + " & You are Fail ")
    }
    else if(think>=80){

        console.log("Your lucky Number : " + think + " & You are Passed ")
        break
    }
    
}
