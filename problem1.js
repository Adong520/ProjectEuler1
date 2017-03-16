var j=0;
var number =[];
var sum=0;
var result = document.getElementById('number');
var resultSum =  document.getElementById('sum');


for (i=1;i<1000;i++) {
	
	if (i%3===0 || i%5===0) {
       number[j]=i;
       j++;
	} //end if
}//end for
// output the numbers and calculate the sum
 
for (i=0;i<j;i++) {
	
	result.textContent = result.textContent +number[i] + '\n';

	sum += number[i];

}// end for

resultSum.textContent = resultSum.textContent + sum;


