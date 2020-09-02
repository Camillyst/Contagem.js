function fibonacci(m){
    var a = 1;
    var b = 0;
    var c = 0;
    while(true){
        if(c >= m){
            break;
        }
        else{
            console.log(c + " - ");
            c = b + a;
            a = b;
            b = c;
        }
    }
}
var x = fibonacci(5);
console.log(x);