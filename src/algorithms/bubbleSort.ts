import { SortInterface } from "../interfaces/Sort";

import { sleep } from "../utils/sleep";
import { getItemElement } from "../utils/getItemElement";

// Time Complexity
// ---------------
// Best: O(n)
// Average & Worst: O(n^2)

// Stable: True
// ------------

export const bubbleSort: SortInterface = async (collection, setCollection) => {
  // Add a delay in ms
  const DELAY = 100;

  // Copy array from state
  let sortedList = [...collection];

  // n-1 steps
  const totalSteps = sortedList.length - 1;

  for (let step = 0; step < totalSteps; step++) {
    for (let i = 0; i < totalSteps - step; i++) {
      // Get dom elements - Current values being compared
      let currentEl = getItemElement(i);

      // Add style to current element
      currentEl.classList.add("current");

      //Add Delay
      await sleep(DELAY);

      const a = i;
      const b = i + 1;

      // Swap if a > b
      if (sortedList[a] > sortedList[b]) {
        const temp = sortedList[a];
        sortedList[a] = sortedList[b];
        sortedList[b] = temp;

        // Update state with "new" array
        setCollection([...sortedList]);
      }

      // Style sorted item
      if (i === sortedList.length - step - 2) {
        const sortedEl = getItemElement(i + 1);
        sortedEl.classList.add("sorted");
      }

      // Remove style of current element except last one
      if (step < totalSteps - 1) {
        currentEl.classList.remove("current");
      }
    }
  }

  return sortedList;
};
