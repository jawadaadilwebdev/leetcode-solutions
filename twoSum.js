var twoSum = function(nums, target) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        const complement = target - current;
        if (map.hasOwnProperty(complement)) {
            return [map[complement], i];
        }
        map[current] = i;
    }
}
console.log(twoSum([2,7,11,15], 9));
