//recursive square function 
function SquareFunction(){
    //the result equals to 0 if n=0
    if (n==0) { 
        0
    }
    //a negative value of n will be calculated as |n|
    else if (n<0){
        (n^2)
    }
    //as the remarkable identity (n+1)^2 is equal to n^2 + 2n + 1, if we replace n by n-1, ((n-1)+1)^2=n^2 and the calcul will end to the result below 
    else {
        ((n-1)^2) + (2*n) - 1
    }
    return n*n
}

console.log(SquareFunction());
