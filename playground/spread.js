// function add(a,b) {
//     return a+b;
// }

// console.log(add(3,1));

// var todo = [2,5];

// console.log(add(...todo));

// var groupA = ['Jen','cory'];
// var groupB = ['vikram'];
// var final  = [3, ...groupA];
// console.log(final);

var person= ['Andrew',25];
var personTwo = ['zen',29];

function greeter(name,age) {
console.log(`hi ${name} your age is ${age} `);
}

greeter(...person);
greeter(...personTwo);

var names = ['mike','ben'];
var final = ['andrew'];

var result = [...names,...final];

result.map((name)=>{
    console.log(`Hi ${name}`);
})


