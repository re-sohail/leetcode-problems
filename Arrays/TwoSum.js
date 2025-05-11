// 1. Broute Method -> Time Complexity -> O(n2)
function BruteMethod(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

// console.log(BruteMethod([2, 3, 20, 9, 5, 13, 34], 9));

// 2. Mapping -> useing two loops but Time Complexity -> O(n)
function MappingMethod(nums, target) {
  const map = new Map(); // there are methods are has, set, get and etc

  nums.forEach((value, i) => {
    map.set(value, i);
  });

  for (let i = 0; i < nums.length; i++) {
    const remaining = target - nums[i];
    if (map.has(remaining) && map.get(remaining) !== i) {
      return [i, map.get(remaining)];
    }
  }
}

// console.log(MappingMethod([2, 3, 20, 7, 5, 13, 34], 5));

// 3. Mapping with single Loop -> Time Complexity -> O(n)
function MapWithSingleLoop(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const remaining = target - nums[i];
    console.log(remaining);
    if (map.has(remaining)) {
      return [map.get(remaining), i];
    }
    map.set(nums[i], i);
  }
}

console.log(MapWithSingleLoop([2, 3, 20, 7, 5, 13, 34], 10));

// 4. With Sorting + Pointer -> Time Complexity -> O(Log(n))
function SortWithPointer(nums, target) {
  // pair
  const arr = nums.map((value, i) => [value, i]);
  // sort
  let sortedArr = arr.sort((a, b) => a[0] - b[0]);

  let left = 0;
  let right = sortedArr.length - 1;
  while (left < right) {
    let sum = arr[left][0] + arr[right][0];

    if (sum === target) {
      return [arr[left][1], arr[right][1]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
}

// console.log(SortWithPointer([2, 3, 20, 7, 5, 13, 34], 10));
