alert("Welcome to our webpage");
// window.alert("hello");
// console.log(2+25);
var tweet = prompt("write your querry here...");
var Name = prompt("what is your name?")
// var alrt = "Fairoz";
// alert(Name); 

    var a ="3";
    var b ="8";
    var temp;
temp = a;
a=b;
b=temp;

function message(){   
    console.log("a is "+ a);
    console.log("b is" + b);
 console.log(Name.length);
 var d= tweet.length;
 var c =100-d;
console.log("you have writen " + d+ " chars, you have left "+ c + " chars left"  );
alert(("you have writen " + d+ " chars, you have left "+ c + " chars left"  ))
console.log(tweet.slice(0,10));
var upper = Name.slice(0,1);
var lower =Name.slice(1,Name.length);
Name = Name.toUpperCase();
var abc = upper.toUpperCase();
console.log(Name);
 var cap = abc + lower;
 alert(cap);
}
message();

var mech = prompt("how many mechanics do you want?? for one mechanic it coasts 5$/hr");
var mechanic = 100- mech;
var f = "available mechanics are " + mechanic;
alert(f);
// var e = Math.floor(30/4);
// console.log(e);
