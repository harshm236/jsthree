1. Find the number of digits
const Find_Digits = (n) => {
    if(n == 0) {
      return 1;
    }
    let count = 0 ;
    while(n != 0){
       n = parseInt(n/10) ;
       count++ ;
    }
    return count ;
};

2.Find the Fives.
const Find_Five = (n) => 
{
  let count = 0 ;
  while(n != 0) {
    let currDigit = n % 10 ;
    if(currDigit == 5){
      count++;
    }
    n = parseInt(n/10)
  }
  
  
  return count 
	 
};

3.Find Sum
const findSum = (n) => {
    let evesum=0
    while(n!=0)
    {
      if(n%2==0)
      {
        evesum+=n
      }
      n--
    }
    return evesum
};


4.Find the sum of the digits of a given number.

const Number_Sum = (n) => 
{
	let sum=0
	while (n/10!=0)
	{
	  sum=sum+n%10
	  n=parseInt(n/10)
	}
	return sum
};

5.Print the Odds.

const Print_Odd = (n) => 
{
  for(let i = 2;i<=n;i++)
  {
    if(i==2 || i%2!==0)
    {
      console.log(i);
    }
  }
};

6.Print the Pattern.


const Print_pattern = (N) => 
{
  let str = "";
  for(let i=1; i<=N; i++) {
    str += "*";
    console.log(str);
  }
};

7.Check whether a Number is a prime or not.


const Prime_Check = (n) => 
{    let i=n-1 , p=0;
  while(i!=1)
  { 
    if(n%i===0)
    {p=1;
      break;
    }
    i--;
  }
  if(p===0)
  return "YES"
	else
	return "NO"
};

8.Print Numbers

const printNumbers = (n) => {
    for(let i=1;i<=n;i++)
     console.log(i)
};
9.Print the Table


const Print_Table = (n) => 
{
	for(let i=1;i<=10;i++)
	{ let res=i*n
	   console.log(n+" * "+i+" = "+res)

	}
	};

