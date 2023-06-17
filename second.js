

/*let num = 28374983;
let reverse = "";
console.log("actual number " +num); 
while (num > 0) {
  //console.log(num);  
  console.log(num % 10);
  reverse += num % 10;
  num = parseInt(num / 10);
}
convert = parseInt(reverse);
console.log("reverse number is "+convert);*/
//console.log(convert, typeof convert);

/*let alien = {
    name : 'Chandramouli',
    tech : 'Javascript',
    phones : {
        android_version : '11',
        ram : '4',
        brand1 : 'mi'
    }
}
for(let key in alien.phones)
{
    console.log(key, alien.phones[key]);
}*/

let addition = function(num1, num2)
{
    if (num1 > -1 && num2>-1){
        console.log(num1 + num2);
    }
    else{
        console.log("One of those number is negative");
    }
}
addition(120, 40);