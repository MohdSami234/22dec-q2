 //Assignment -3 --
//Q-2 Take three numbers and find max. (Using arrays) 
 

var arr = [];

var i = prompt("Enter first number");
i = parseInt(i);
arr.push(i);

i = prompt("Enter second number");
i = parseInt(i);
arr.push(i);


i = prompt("Enter third number");
i = parseInt(i);
arr.push(i);

   for(let i =0;i<3;i++){
     if(arr[0]>arr[1] && arr[0] > arr[2]){
           console.log(arr[0]);}
       else if(arr[1]>arr[2] && arr[1] > arr[0]){
             console.log(arr[1]);}
           else{
               console.log(arr[2]);}
        }

    //using Math.max()//
    Math.max()
    max= Math.max(arr[0],arr[1],arr[2]);
    console.log(max);
     
