
function findduplicates(){
let arr1 = new Array(6);
let arr2 = new Array(6);
arr1 = [2, 3, 24, 8, 9, 14];
arr2 = [2, 4, 7, 9, 29, 3];

for(let j=0;j<arr2.length;j++)
{
    if(!(arr1.includes(arr2[j]))) 
    {
    arr1.push(arr2[j])
    }
}
console.log(arr1);
}
findduplicates();