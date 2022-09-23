// var likesAmount1 = document.querySelector("#likes1");
// var likesAmount2 = document.querySelector("#likes2");
// var likesAmount3 = document.querySelector("#likes3");
// var btn1 = document.querySelector("#btn1");
// var btn2 = document.querySelector("#btn2");
// var btn3 = document.querySelector("#btn3");

// var likesAmount = [777,941,518]
// var buttons = ["#btn1", "btn2", "btn3"]

// function countLikes(elem) {
//     if(elem == "#btn1") {
//         likesAmount1.innerText = likesAmount[0]+= 1;
//     }
//     if(elem == "#btn2") {
//         likesAmount2.innerText = likesAmount[1]+= 1;  
//     }
//     if(elem == "#btn3") {
//         likesAmount3.innerText = likesAmount[2]+= 1;  
//     }
// }

function countLikes(elem) {
    document.querySelector(elem).innerText++;
}