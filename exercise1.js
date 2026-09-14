function max(a, b, c) {
    var largest = a;

    if (b > largest) {
        largest = b;
    }

    if (c > largest) {
        largest = c;
    }

    return largest;
}

console.log(max(1, 0, 1));
console.log(max(0, -10, -20));
console.log(max(1000, 510, 440));

document.getElementById("output").innerHTML =
    "<p>" + max(1, 0, 1) + "</p>" +
    "<p>" + max(0, -10, -20) + "</p>" +
    "<p>" + max(1000, 510, 440) + "</p>";