var rotate = function(nums, k) {
    k = k % nums.length;

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let temp = nums[right];
        nums[right] = nums[left];
        nums[left] = temp;
        left++;
        right--;
    }

    left = 0;
    right = k - 1;
    while (left < right) {
        let temp = nums[right];
        nums[right] = nums[left];
        nums[left] = temp;
        left++;
        right--;
    }

    left = k;
    right = nums.length - 1;
    while (left < right) {
        let temp = nums[right];
        nums[right] = nums[left];
        nums[left] = temp;
        left++;
        right--;
    }
};
