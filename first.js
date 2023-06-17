// the hello world program
//console.log('Hello World');
//console.log ("Suryansh Raj Singh Kushwah")

/*let num =5
console.log(num)*/

/*num=7
console.log(num+6)*/

/*let user_name = "URVASHI KUSHWAH"
console.log(user_name)

let num = String("123")
console.log(num , typeof num)*/

/*let num1=7;

if(num1%2==0)
    {
        console.log("num1 is even number");
    }
else{
    console.log("num1 is odd number");
}*/

/*num=6;
result = num%2==0?"even":"odd";
console.log(result);*/

/*let day ="wednesday";

if(day =="monday")
{
    console.log("alarm of 7am");
}
else if(day=="tuesday"|| day=="thursday"|| day =="wednesday")
{
    console.log("alarm of 4am");
}
else if(day=="friday")
{
    console.log("alarm of 9am");
}
else{
    console.log("alarm of 8am");
}*/


/*let day ="wednesday";

switch(day)
{
    case "monday":
        console.log("7am");
        break;
    case "tuesday":
    case "wednesday":
    case "thursday":
        console.log("4am");
        break;
    case "friday":
        console.log("9am");
        break;
    case "saturday":
    case "sunday":
        console.log("8am");
        break;
    default:
        console.log("Holiday");

}





/*let num1= 564782;
let num2 =564782;
while(num>0)
{
    let rem =num1%10;
    let d= rem*10;
    num1=num1/10;

    if(num2===rem)
    {
        console.log(rem);
    }
}*/



let num = 28374983;
let reverse = "";
while (num > 0) {
  console.log(num % 10);
  reverse += num % 10;
  num = parseInt(num / 10);
}
convert = parseInt(reverse);
console.log(convert, typeof convert);