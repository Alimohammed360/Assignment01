let result = +prompt("Write your acheived marks")

if(result < 60) {
    document.write("Sorry! Your Grade is F" )
}
else if(result > 60 && result < 70) {
    document.write("Your Grade is D" )
}
else if(result > 70 && result < 80){
    document.write("Your Grade is C")
}
else if(result > 80 && result < 90){
    document.write("Your Grade is B" )
}
else {
    document.write("Congratulations! Your Grade is A")
}