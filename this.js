var Jose = {

    printFristName: function() {

        console.log("My name is Jose");
        console.log(this === Jose);
        console.log(this === global);
    }
}
Jose.printFristName();

// the default calling context is global
function doSomethingWorthless() {
    console.log("\nI am worthless")
    console.log(this === global);
}

doSomethingWorthless();