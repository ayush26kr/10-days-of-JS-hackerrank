function getSecondLargest(nums) {
    // Complete the function
    var first=nums[0];
    var second=-1;
    for(let i=1;i<nums.length;i++)
    {
        if(nums[i]>first){
            second=first;
            first=nums[i];
        }
        if(nums[i]<first && nums[i]>second)
        {
            second=nums[i];
        }
    }
    return second;
}
