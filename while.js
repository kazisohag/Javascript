var dice = true
while(dice){
    var rand = Math.round(Math.random()*10 + 1)
    if(rand%2==0){
        console.log("Win!!!")
        break;
    }
    else{
        console.log("LOSS!!!")
    }
}