function cityAlert() {
    alert("Loading weather report...");
}

function hide(elem) {
    document.querySelector(elem).remove();
}

function convert() {
    var activeObjects = document.querySelectorAll('.degrees');
    for (var i = 0; i < activeObjects.length; i++) {
        if (document.querySelector('#mySelect').value == 'fahrenheit') {
            activeObjects[i].innerText = parseInt((activeObjects[i].innerText) * 9 / 5 + 32);
        }
        if (document.querySelector('#mySelect').value == 'celsius') {
            activeObjects[i].innerText = parseInt(((activeObjects[i].innerText) - 32) / 1.8);
        }
    }
}




















// WORKING THROUGH THE CONVERSION PROBLEM BELOW 


// document.querySelectorAll('.red').innerText = parseInt(num * 9/5 + 32); 


// function convert() {
//     console.log(document.querySelector('#mySelect').value);
//     var activeObjects = document.querySelectorAll('.degrees');
//     console.log(activeObjects);
//     for (var i = 0; i < activeObjects.length; i++) {
//         if (document.querySelector('#mySelect').value == 'fahrenheit') {
//             var num = parseInt(activeObjects[i].innerText);
//             activeObjects[i].innerText = parseInt(num * 9 / 5 + 32);
//             var num = parseInt(document.querySelectorAll('.blue').innerText);
//             document.querySelectorAll('.blue').innerText = parseInt(num * 9 / 5 + 32);
//         }
//         if (document.querySelector('#mySelect').value == 'celsius') {
//             var num = parseInt(activeObjects[i].innerText);
//             activeObjects[i].innerText = parseInt((num - 32) / 1.8);
//             var num = parseInt(document.querySelector('.blue').innerText);
//             document.querySelectorAll('.blue').innerText = parseInt((num - 32) / 1.8);
//         }
//     }
// }



// function convert() {
//     console.log(document.querySelector('#mySelect').value);

//     if(document.querySelector('#mySelect').value == 'fahrenheit'){
//         var num = parseInt(document.querySelector('.red').innerText);
//         document.querySelector('.red').innerText = parseInt(num * 9/5 + 32);
//         var num = parseInt(document.querySelector('.red2').innerText);
//         document.querySelector('.red2').innerText = parseInt(num * 9/5 + 32);
//         var num = parseInt(document.querySelector('.red3').innerText);
//         document.querySelector('.red3').innerText = parseInt(num * 9/5 + 32);
//         var num = parseInt(document.querySelector('.red4').innerText);
//         document.querySelector('.red4').innerText = parseInt(num * 9/5 + 32);

//         var num = parseInt(document.querySelector('.blue').innerText);
//         document.querySelector('.blue').innerText = parseInt(num * 9/5 + 32);
//         var num = parseInt(document.querySelector('.blue2').innerText);
//         document.querySelector('.blue2').innerText = parseInt(num * 9/5 + 32);
//         var num = parseInt(document.querySelector('.blue3').innerText);
//         document.querySelector('.blue3').innerText = parseInt(num * 9/5 + 32);
//         var num = parseInt(document.querySelector('.blue4').innerText);
//         document.querySelector('.blue4').innerText = parseInt(num * 9/5 + 32);
//     }

//     if(document.querySelector('#mySelect').value == 'celsius'){
//         var num = parseInt(document.querySelector('.red').innerText);
//         document.querySelector('.red').innerText = parseInt((num-32) / 1.8);
//         var num = parseInt(document.querySelector('.red2').innerText);
//         document.querySelector('.red2').innerText = parseInt((num-32) / 1.8);
//         var num = parseInt(document.querySelector('.red3').innerText);
//         document.querySelector('.red3').innerText = parseInt((num-32) / 1.8);
//         var num = parseInt(document.querySelector('.red4').innerText);
//         document.querySelector('.red4').innerText = parseInt((num-32) / 1.8);

//         var num = parseInt(document.querySelector('.blue').innerText);
//         document.querySelector('.blue').innerText = parseInt((num-32) / 1.8);
//         var num = parseInt(document.querySelector('.blue2').innerText);
//         document.querySelector('.blue2').innerText = parseInt((num-32) / 1.8);
//         var num = parseInt(document.querySelector('.blue3').innerText);
//         document.querySelector('.blue3').innerText = parseInt((num-32) / 1.8);
//         var num = parseInt(document.querySelector('.blue4').innerText);
//         document.querySelector('.blue4').innerText = parseInt((num-32) / 1.8);
//     }
// }
