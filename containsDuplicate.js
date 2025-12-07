var containsDuplicate = function(nums){
  let seen = new Set();
  for(let n of nums){
    if(seen.has(n)){
      return true;
    }
    seen.add(n)
  }
  return false
}

let finalResult = containsDuplicate([1,2,3,1])
console.log(finalResult)
