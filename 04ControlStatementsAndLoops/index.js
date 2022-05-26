/*****************************************************
If..Else.
=>if statement is executed a statement if a specified condition is truth
else false statement is executed.
Switch Statement.
=>
While Loop.
Do-While Loop.
For Loop.
For in Loop.
For of Loop.
Conditional (ternary) operator.
*****************************************************/

/*****************************************************
01. if else
******************************************************/
// let tom = "sunny";
// if(tom == "rain"){
//    console.log("take raincoat");
// }else{
//    console.log("No need to take raincoat");
// }



/*******************************************************
02. Conditional (ternary) operator
 The conditional (ternary) operator is the only javascript operator
 that takes three operands
 ****************************************************/
// var age = 17;
// if(age >= 18){
//    console.log("you are eligible to vote");
// }else{
//    console.log("you are not eligible to vote");
// }

//use of ternary operator
// let age = 18;
// let check = (age >= 18) ?
// "you are eligible to vote":
// "you are not eligible to vote";
// console.log(check);

/*******************************************************
03. Switch Statement
 Evaluates an expression , matching the expression's value to a 
 case clause, and executes statements associated with that case

 ****************************************************/

 //Find the Area of circle ,trangle, rectrangle?

 //if else if
/*let area = "trangle";
let pi = 3.142 ,l = 5, b = 4, r=3;

if(area == "circle"){
  console.log("Area of circle is : " + pi*r**2 );
}else if(area == "trangle"){
  console.log("Area of trangle is : " + (l*b)/2 );
}else if(area == "rectangle"){
  console.log("Area of rectangle is : " + (l*b) );
}else{
  console.log("please enter valid data");
}*/

//switch case

/*let area = "trangle";
let pi = 3.142 ,l = 5, b = 4, r=3;

switch(area){
  case 'circle':
  console.log("Area of circle is : " + pi*r**2 );
  break;
  case 'trangle':
  console.log("Area of trangle is : " + (l*b)/2 );
  break;
  case 'rectangle':
  console.log("Area of rectangle is : " + (l*b) );
  break;
  default :
  console.log("please enter valid data");
}*/


/*************************************************************
04. While Loop;
 The while statement creates a loop that execute a specified
 statement as long as the test condition evaluates to true.
**************************************************************/

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);

// let num = 1;
// //block scope
// while(num<=1000){
//   console.log(num); 
//   num++;
// }

/*************************************************************
05. Do-While Loop;
**************************************************************/
let num = 1;
do{
  console.log(num); 
  num++;
}while(num>=1000);


/*************************************************************
06. For Loop;
**************************************************************/


