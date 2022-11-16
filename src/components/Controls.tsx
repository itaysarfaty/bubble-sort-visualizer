import { FC } from "react";

interface ControlsInterface {
  isDisabled: boolean;
  generate: () => void;
  bubbleSort: () => void;
}
const Controls: FC<ControlsInterface> = ({
  isDisabled,
  generate,
  bubbleSort,
}) => {
  return (
    <div className="controls">
      <button disabled={isDisabled} onClick={generate}>
        Mix
      </button>
      <button disabled={isDisabled} onClick={bubbleSort}>
        Sort
      </button>
    </div>
  );
};

export default Controls;
