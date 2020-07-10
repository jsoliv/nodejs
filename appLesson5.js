var Jose = {
    favFood: "lasagna",
    favMovie: "Scott Pilgrim against the World"
};

var Person = Jose;
Person.favFood = "salad";

console.log(Jose.favFood);


console.log(19 == "19");
console.log(19 === "19");