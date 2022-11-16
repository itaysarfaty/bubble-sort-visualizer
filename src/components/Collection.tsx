import { FC } from "react";
import { MdOutlineStopCircle } from "react-icons/md";

export const Collection: FC<{ list: number[]; isSorting: boolean }> = ({
  list,
  isSorting,
}) => {
  return (
    <div className="item-collection">
      {list.map((value, i) => {
        return <div className="item" style={{ height: value }} key={i} />;
      })}

      {isSorting && (
        <MdOutlineStopCircle
          size={30}
          className="cancel-btn"
          onClick={() => {
            window.location.reload();
          }}
        />
      )}
    </div>
  );
};
