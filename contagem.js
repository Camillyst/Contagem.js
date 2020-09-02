function Score(number1, number2){
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    var counter = 0;

    for (var i = number1 ; i < number2 ; i++){
        counter++;
    }
    return counter;
}
var number1 = 45;
var number2 = 420;
var cntr = Score(number1, number2);
console.log(cntr);