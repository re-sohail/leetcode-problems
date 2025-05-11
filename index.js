// function app(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }

// function app(nums, target) {
//   const map = new Map();

//   nums.forEach((item, i) => map.set(item, i));

//   for (let i = 0; i < nums.length; i++) {
//     const remaining = target - nums[i];
//     if (map.has(remaining) && map.get(remaining) !== i) {
//       return [i, map.get(remaining)];
//     }
//   }
// }

// function app(nums, target) {
//   const map = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     const remaining = target - nums[i];

//     if (map.has(remaining)) {
//       return [map.get(remaining), i];
//     }
//     map.set(nums[i], i);
//   }
// }

function app(nums, target) {
  let newArr = nums.map((item, i) => [item, i]);
  const sortedData = newArr.sort((a, b) => a[0] - b[0]);

  let left = 0;
  let right = sortedData.length - 1;

  while (left < right) {
    let sum = newArr[left][0] + newArr[right][0];

    if (sum === target) {
      return [newArr[left][1], newArr[right][1]];
    } else if (sum < target) {
      left++;
    } else {
      
      right--;
    }
  }
}

console.log(app([2, 3, 5, 8, 7, 9, 4, 2], 15));
