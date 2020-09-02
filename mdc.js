function mdc(number1, number2){
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    var resto = 0;
    do{
        resto = number1 % number2;
        number1 = number2;
        number2 = resto;
    } while(resto != 0);
    return number1;
}
var number1 = 24;
var number2 = 9;
var resultado = mdc(number1, number2)
console.log(resultado);