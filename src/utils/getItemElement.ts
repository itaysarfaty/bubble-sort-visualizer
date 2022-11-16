// Add 1 to index because nth-child starts at 1 not 0
export const getItemElement = (index: number): HTMLDivElement => {
  return document.querySelector(
    `.item:nth-child(${index + 1})`
  )! as HTMLDivElement;
};
