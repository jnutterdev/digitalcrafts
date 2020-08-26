const nums = [1, 5, 25, 3, 99, 20];

function bigNum(nums) {
    nums = nums.sort().reverse();
    console.log(nums[0]);
}

bigNum(nums)