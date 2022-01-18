console.log('merhaba');

function showPrimeNumber(lowNumber,highNumber){
    for(let i = lowNumber; i<=highNumber;i++){
        let isPrime = true;
        for(let j = 2; j<=i;j++){
            if( i % j ==0 && j!==i)
                isPrime = false
        }
        if(isPrime)
            console.log(i); 
    }
  
}

showPrimeNumber(10,20)

console.log(process.argv[1]);
