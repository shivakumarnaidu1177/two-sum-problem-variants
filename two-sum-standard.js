function twoSum(nums, target) {
    let map = new Map();  
    
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]; 
        
        if (map.has(complement)) {
            return [map.get(complement), i]; 
        }
        
        map.set(nums[i],i)
    }
    
    return []; 
}

console.log(twoSum([1,2,3,4,5,6],4));
