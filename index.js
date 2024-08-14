//question no.1 
//factorial 

const { ServerResponse } = require("http");
const { isArrayBufferView } = require("util/types");

function factorial(n){
    if(n !== 0){
        return n*factorial(n-1);
    }else{
        return 1;
    }
}
// console.log(factorial(5));


//prime number check
function isPrime(n){
    if(n<=1){
        console.log("neither prime nor composite");
        return false;
    }
    if(n<=3){
        return true;
    }
    else{
        for(i = 2 ; i <= Math.sqrt(n) ; i++){
            if(n%i==0){
                return false;
            }
        }
        return true;
    }
}
// console.log(isPrime(10));


//sum of digits
function sumOfDigits(n){
    let number = n.toString();
    let sum=0;

    for(each of number){
        sum += parseInt(each);
    }
    return sum;
}
// console.log(sumOfDigits(1234));


//reverse of a string
function stringReverse(value){
    let ReversedString = "";
    for (let i=value.length-1; i>=0;i--)
    {
        ReversedString += value[i];
    }
    return ReversedString;
}
// console.log(stringReverse("Sahil"));


//maximum in an array
function arrayMax(){
    let arr1 = [ 1,4,5,2,7,3,9]
    let max = arr1[0];
    for(let i=0; i<arr1.length;i++){
        if(arr1[i] > max){
            max = arr1[i];
        }  
    }
    return max;
}
// console.log(arrayMax())


//Palindrome check
function isPalindrome(anyValue){
    let reverseOfanyValue = "";
    for (let i=anyValue.length-1;i>=0;i--){
        reverseOfanyValue += anyValue[i];
    }
    if(reverseOfanyValue == anyValue){
        return true;
    }else{
        return false;
    }
}

// console.log(isPalindrome("heleh"));


//count vowels javascript
function countVowels(anyString){
    let vowelsum = 0;
    for (i=0;i<anyString.length;i++){
        if (anyString[i] == 'a' || anyString[i] == 'e' || anyString[i] == 'i' || anyString[i] == 'o' || anyString[i] == 'u' ){
            vowelsum += 1;
        }
    }
    return vowelsum;
}

// console.log(countVowels("javascript"));

function fibonacci(n){
    let a=1;
    let b=1;
    let c=0;
    for(i=0;i<=10;i++){
        console.log(c);
        c=a+b;
        a=b;
        b=c; 
    }
}
// fibonacci(10);


//merging arrays by removing duplicacy
function mergeArrays(){
    arr1=[1,2,3];
    arr2=[3,4,5];
    arr3=[];
    for(let i=0;i<arr1.length;i++){
        arr3.push(arr1[i]);
    }
    for(let z=0;z<arr2.length;z++){
        arr3.push(arr2[z]);
    };
    const uniqueArray = Array.from(new Set(arr3));
    return uniqueArray;
}
// console.log(mergeArrays());


//sum of even numbers in a array
function evenSum(arr){
    let evensum = 0;
    for(i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            evensum += arr[i];
        }
    }
    return evensum;
}
// console.log(evenSum([1,2,3,4,5,6]));

