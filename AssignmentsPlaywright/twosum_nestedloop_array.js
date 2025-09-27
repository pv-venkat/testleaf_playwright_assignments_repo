const nums = [2,4,7,8,11,14];
const target = 18;
//const nums2 = [20,4,18,2,6,3,9,11,10,14];
//const target2 = 24;


function targetindex(nums, target)
{
let results = [];
for (let i = 0; i < nums.length; i++) {
 for (let j = i + 1; j < nums.length; j++)
    {  
        if (nums[i] + nums[j] === target) {
            results.push([i, j]);
    }
}
 }
return results;
}
console.log("Matching the target value, the array elements sum are :", targetindex(nums, target));