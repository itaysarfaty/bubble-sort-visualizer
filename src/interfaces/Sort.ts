export interface SortInterface {
  (
    collection: number[],
    setCollection: React.Dispatch<React.SetStateAction<number[]>>
  ): Promise<number[]>;
}
