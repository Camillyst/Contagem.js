function primo(){
  var n = 7;
  var contador=0;
  var x;
for (x = 1;x <= n; x++) {   
if (n % x ==0) {
   contador++;
}
}
if (contador==2){
console.log("Número é primo");   
}
else{ 
console.log("Não é primo");
}
}
var primos = primo();
console.log(primos);
