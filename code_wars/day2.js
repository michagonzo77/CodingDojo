function digitalRoot(n) {
    var sum = n;
    var arr = [];
    var reducer = (a,b) => parseInt(a) + parseInt(b);
    while (sum > 9) {
        arr = sum.toString().split("");
        sum = arr.reduce(reducer);
    }
    return sum
}


456
4 + 5 + 6
15
1 + 5
6

digitalRoot(16);

console.log(digitalRoot(4564241545));


// function digitalRoot(n) {
//     var strings = n.toString().split('');
//     var digits = [];
//     strings.forEach(str => {
//         digits.push(Number(str));
//     });
//     var total = 0;
//     for (var i = 0; i < digits.length; i++) {
//         console.log(digits[i])
//         total = total + digits[i];
//     }
//     console.log(total);
//     return total;
// }

// digitalRoot(15);



// function digitalRoot(n) {
//     var strings = n.toString().split('');
//     var digits = [];
//     strings.forEach(str => {
//         digits.push(Number(str));
//     });
//     var total = 0;
//     var finalTotal = 0;
//     for (var i = 0; i < digits.length; i++) {
//         console.log(digits[i])
//         total = total + digits[i];
//         for (var j = 0; j < total.length; j++) {
//             console.log(total[j]);
//             finalTotal = finalTotal + total[i];
//         }
//         return finalTotal;
//     }
//     console.log(total);
//     return [total, finalTotal];
// }