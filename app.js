

function findPrimeNumbers(){
  let mill = 100
  for(let x = 1; x< mill; x++){
    let y =x
    let z = 1
    while(y > 0){
      // console.log("y",y);
      // console.log(x);
      y--
      if(x % y !== 0 && x % 3 !==0 && y == 2){console.log("prime", x);}
    }
  }
}