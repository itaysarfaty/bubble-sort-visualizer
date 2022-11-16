import { SortInterface } from "../interfaces/Sort";

import { sleep } from "../utils/sleep";

// Time Complexity
// ---------------
// All cases: O(n * Log n)
// Stable: True
// ------------

export const mergeSort: SortInterface = async (collection, setCollection) => {
  // Copy array from state
  let sortedList = [...collection];

  sortedList = await _mergeSort(sortedList, setCollection);
  return sortedList;
};

const _mergeSort: SortInterface = async (unsortedArray, setCollection) => {
  // No need to sort the array if the array only has one element or empty
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  // In order to divide the array in half, we need to figure out the middle
  const middle = Math.floor(unsortedArray.length / 2);

  // This is where we will be dividing the array into left and right
  const leftP = unsortedArray.slice(0, middle);
  const rightP = unsortedArray.slice(middle);

  const left = await _mergeSort(leftP, setCollection);
  const right = await _mergeSort(rightP, setCollection);

  await sleep(100);
  setCollection([...left, ...right]);

  // Using recursion to combine the left and right
  return merge(left, right);
};

function merge(left: number[], right: number[]) {
  let sortedArray: number[] = [];

  // We will concatenate values into the resultArray in order
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift()!);
    } else {
      sortedArray.push(right.shift()!);
    }
  }

  return [...sortedArray, ...right, ...left];
}
