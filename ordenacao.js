function quickSort(vet, esq, dir){
    var a = esq;
    var b = dir;
    var meio = parseInt((a + b)/ 2);    				
    while(a < b){
        while(vet[a] < vet[meio]){
            a++;				
        }
        while(vet[b] > vet[meio]){
             b--;
        }
        if(a <= b){
          var temp = vet[a];
          vet[a] = vet[b];
          vet[b] = temp;
          a++;
          b--;
        }			
    }		
    if(b > esq)
        quickSort(vet, esq, b);		
    
    if(a < dir)
         quickSort(vet, a, dir);		
    }
    
    var vet = [4,10,3,9,7,1,12];  
    console.log(vet.join(" ")+"<br/>");
    var esq = 0;
    var dir = vet.length - 1;
    quickSort(vet, esq, dir);	
    console.log(vet.join(" "));