// write a program that works out whether if a given year is a leap year or not?

let year = 2000;
debugger;
if(year%4===0){  
    if(year%100===0){  
        if(year%400===0){  
            console.log(year +" is leap year"); 
        }else{
            console.log(year +" is not leap year"); 
        }
    }else{
    console.log(year +" is leap year");
    }
}else{
    console.log(year +" is not leap year"); 
}

// what is truthy and falsy statement?

// we have total 5 falsy value in js
// 0," ",undefined,null,NaN,false**

if(null){
   console.log("OMG , we loss the game");
}else{
   console.log("Yay, we won the game");
}