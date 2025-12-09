var moveZeroes = function (nums) {
  const zeroCount = nums.filter((item) => item === 0).length;
  let vistedZero = 0;

  let j = 0;
  while (j < nums.length && vistedZero < zeroCount) {
    if (nums[j] === 0) {
      vistedZero++;
      for (let i = j; i < nums.length - 1; i++) {
        nums[i] = nums[i + 1];
      }
      nums[nums.length - 1] = 0;
    } else {
      j++; 
    }
  }

  return nums;
};
