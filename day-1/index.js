// console.log("Hello World");

// Ternary operator
// var data = ("EMC" == "emc")?"Both Are Equal":"Not Equal";
// console.log(data);

// var raining = (false)?"Take an Umbrella":"Sun Day"
// console.log(raining);

// What is Array 
var arr = 10;
var arr = [10, 20, 30];
arr.push(40);

// console.log(arr.length);

// console.log(arr[2]); // off check panniruke intha log use panni.

// Object
const students = [
    {
        name: "Ranjith",
        age: 21,
        place: "Perambalur"
    },
    {
        name: "Muthu",
        age: 20,
        place: "Thiruvarur"
    }
]

// console.log(students[1]);
students[0].name = "Ram" // Changing the Specific Key Value
// console.log(students[1].name); // Want to separate the single property in object.
// ("Ranjith" || "Ram")?console.log(students[0]):"ram"; This all my mistakes when im coading

// Normal Function 
function msg(){
    // console.log("Hey Guys!");
}
msg();

// Anonymous function
var msg = function(){
    // console.log("Hey Gugs Naan Ungal Ranjith");
}
msg(); // For function there is no name that is anonymous function.

// Arrow Function
var arrow = ()=> {
    // console.log("Hey Guys Im the arrow function");
}
arrow();


// Tempalate literals
var myName = "Ranjith";
var age = 21;

// console.log(`My name is ${myName} and My age is ${age}`);

// Destructring Assignment
// var prices = [10, 20, 30]
// var [icecream, popcorn, chocolate] = prices; 

var classRooms = [20, 30, 60]
var [aids, cse, it] = classRooms;

// console.log(cse);

// Rest operator
function rest(a,b,...c){
    // console.log(a+b);
    // console.log(c);
}
rest(10,20,30,40,50);

// Spred Operator
var num = [1,2,3,4,5];
var num1 = [...num, 10,20];

// console.log(num);
// console.log(num1);

// Default Parameter
function add(a,b,c=0){
// console.log(a+b+c);
}
add(1,2)

// Callback Is pending
function call(callback){
    console.log("Im Function One");
    callback();
}

function callTwo(){
    console.log("Im Function Two");
}

// call(callTwo);
// callTwo();

// Asnychronous Function 
// console.log("One");
setTimeout(
    function(){ // Anonymous Function
        // console.log("Two");
    },
    3000
);
// console.log("Three");

// Promise 
var amazon = new Promise((resolve, reject) => {
    var delivered = true;
    if(delivered === true){
        setTimeout(
            function(){
                resolve("Delivered");
            },
        3000)
    } else{
        reject("Failed")
    }
});

amazon.then(
    function(){
        console.log("I will Pay");
    }
).catch(
    function(){
        console.log("Payment Failed")
    }
)