let colorArr = ["red", "green", "yellow", "blue", "white", "pink", "orange", "grey", "purple", "brown", "black", "silver"];
let clickArr = []
let collection = document.querySelector("#collection");
let result = document.querySelector("#result");
let button = document.querySelector("#button");
let hex = document.querySelector("#hex");
result.innerHTML = "#f1f5f8";
result.style.color = "#f1f5f8";
document.querySelector("body main").style.backgroundColor = "#f1f5f8";
hex.addEventListener("click", function () {
    location.href = "https://mandeepsingh6.github.io/color-flipper/index.html"
});

collection.style.padding = "1rem"



function colorChange() {
    if (clickArr[0] === "collection") {
        const color = Math.floor(Math.random() * 12);
        if ("black" === colorArr[color]) {
            result.style.color = "white";
            button.style.color = "black";
            button.style.backgroundColor = "white";
        }
        else {
            result.style.color = colorArr[color];

        }
        result.innerHTML = colorArr[color];
        document.querySelector("body main").style.backgroundColor = colorArr[color];
    }
    else {
        const color = Math.floor(Math.random() * 16777215).toString(16);
        result.innerHTML = "#" + color;
        result.style.color = "#" + color;
        document.querySelector("body main").style.backgroundColor = "#" + color;
    }

}
collection.addEventListener("click", function () {
    collection.style.border = "1px solid";
    collection.style.borderRadius = "10px";
    collection.style.color = "white"
    collection.style.backgroundColor = "black"
    collection.style.padding = "1rem"

    hex.style.color = "black"
    hex.style.backgroundColor = "white"

    clickArr.push("collection")
    if (clickArr.length > 1) {
        clickArr.shift()
    }
    colorChange;

});
button.addEventListener("click", colorChange);
