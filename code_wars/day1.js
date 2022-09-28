// function spinWords(string) {
//     var splitString = string.split(" ");
//     var newString = [];
//     for (var i = 0; i < splitString.length; i++) {
//         if (splitString[i].length >= 5) {
//             var revString = "";
//             for (var j = splitString[i].length - 1; j >= 0; j--) {
//                 revString += splitString[i][j];
//             }
//             splitString[i] = revString;
//             newString = newString + splitString[i] + " ";
//         } else {
//             newString = newString + splitString[i] + " ";
//         }
//     }
//     console.log(newString);
// }

// spinWords("Hey fellow warriors");
// spinWords("This is another test");




function spinWords(string) {
    var splitString = string.split(" ");
    var newString = [];
    for (var i = 0; i < splitString.length; i++) {
        if (splitString[i].length >= 5) {
            var revString = "";
            for (var j = splitString[i].length - 1; j >= 0; j--) {
                revString += splitString[i][j];
            }
            newString.push(revString);
        } else {
            newString.push(splitString[i]);
        }
    }
    newString = newString.join(" ");
    return newString;
}

function spinWords(string) {
    var newString = "";
    for (var i = 0; i < string.length; i++){
        newString = string[i] + newString;
    }
    return newString;
}

console.log(spinWords("Welcome"));
console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is another test"));

// var pink = "pizza"
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi", "Lemon");
// fruits.push(pink)
// console.log(fruits)

// // const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // let text = fruits.join(" and ");

// console.log(text)

// "Hey wollef sroirraw"