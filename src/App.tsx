import { useEffect, useState } from "react";
import { Collection } from "./components/Collection";
import Controls from "./components/Controls";
import { bubbleSort } from "./algorithms/bubbleSort";

import "./App.css";
import { SortInterface } from "./interfaces/Sort";

export default function App() {
  let _collection: number[] = [];
  const SIZE = 30;
  const MAX_VALUE = 200;

  const [collection, setCollection] = useState(_collection);
  const [isSorting, setIsSorting] = useState(false);

  // On Mount
  useEffect(() => {
    generateCollection();
  }, []);

  const generateCollection = () => {
    resetItemsStyle();
    setCollection(randomArray(SIZE, MAX_VALUE));
  };

  const handleSort = async (sort: SortInterface) => {
    resetItemsStyle();
    setIsSorting(true);
    await sort(collection, setCollection);
    setIsSorting(false);
  };

  return (
    <div className="app">
      <h1>Bubble Sort</h1>
      <Collection list={collection} isSorting={isSorting} />
      <Controls
        isDisabled={isSorting}
        generate={generateCollection}
        bubbleSort={() => handleSort(bubbleSort)}
      />
    </div>
  );
}

const randomArray = (size: number, max_value: number) => {
  // https://stackoverflow.com/a/43044960
  return Array.from({ length: size }, () =>
    Math.floor(Math.random() * (max_value + 1))
  );
};

const resetItemsStyle = () => {
  // Get all DOM items
  const itemEls = document.querySelectorAll(
    ".item"
  )! as NodeListOf<HTMLDivElement>;

  // Reset Item styles
  itemEls.forEach((item) => {
    item.classList.remove("sorted");
    item.classList.remove("current");
  });
};
