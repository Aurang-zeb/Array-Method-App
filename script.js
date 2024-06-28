// Define an array to manipulate
let numbers = [1, 2, 3,4];

// Output code on Top of App
document.getElementById('output1').innerHTML = numbers;

//code for Push()
const HandlePush=()=> { 
    numbers.push(Math.floor(Math.random() * 10));
    DisplyOut();    
}
//  Code for Pop()
const HandlePop = () => {
    if (numbers.length === 0)
    {
        alert("Array is Empty You can't Pop empty array");    
        return;
    }
      numbers.pop()
      DisplyOut();    
}
//   Code for shift 
const HandleShift = () => {
    numbers.shift();
    DisplyOut();    
}
// Code for unshift
 const HandleUnShift = () => {
    numbers.unshift(Math.floor(Math.random()*10));
     DisplyOut();
}
// Code for Find length of Array
const HandleLength = () => {
    document.getElementById('output2').innerHTML = `Total Number of Element in Array is <i>${numbers.length}</i>`;
}
// code for slice()
const HandleSlice = () => {
     let SliceAmount = parseInt(prompt("Enter how many elments do you want to slice out"))
    if (isNaN(SliceAmount) || SliceAmount <= 0 || SliceAmount >numbers.length)
    {
        alert("Enter Valid Integer value");
        return;
    }
    document.getElementById('output2').innerHTML = numbers.slice(SliceAmount) + ` Slice out ${SliceAmount} a part of an array starting from array element 1`;
}
// Code for Sort Array
const HandleSort = () => {
    numbers.sort();
    DisplyOut();
}
// Code For Reversing an Array
const HandleReverse = () => {
    numbers.reverse();
    DisplyOut();
  }
//  This will display number array on that h1 heading
const DisplyOut = () => {
    document.getElementById('output1').innerHTML = numbers;
}