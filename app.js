var person = {
    firstName : "Jose",
    lastName : "Oliveira",
    addR: "Rio de Rio de Janeiro Address",
    age: 48
};

console.log(person.age);

function addNumber( a, b) {
    return a + b;
}

console.log(addNumber(18, 17))


var printBacon = function() {  
    console.log("I love bacon");
}

printBacon();

setTimeout(printBacon, 6000);