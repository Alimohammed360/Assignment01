let inPut1 = +prompt("Write a numerical value");
let inPut2 = +prompt("Write another numerical value");
let inPut3 = +prompt("Write another numerical value");
let inPut4 = +prompt("Write another numerical value");
let inPut5 = +prompt("Write another numerical value");

if (inPut1 > inPut2 && inPut1 > inPut3 && inPut1 > inPut4 && inPut1 > inPut5) {
        console.log(inPut1)
}
else if (inPut2 > inPut1 && inPut2 > inPut3 && inPut2 > inPut4 && inPut2 > inPut5) {
    console.log(inPut2)
}
else if (inPut3 > inPut1 && inPut3 > inPut2 && inPut3 > inPut4 && inPut3 > inPut5) {
    console.log(inPut3)
}
else if (inPut4 > inPut1 && inPut4 > inPut2 && inPut4 > inPut3 && inPut4 > inPut5){
    console.log(inPut4)
}
else {
    console.log(inPut5)
}