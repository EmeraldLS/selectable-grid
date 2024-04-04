import { useState } from "react";

export const SelectableGrid = ({
  rows,
  cols,
}: {
  rows: number;
  cols: number;
}) => {
  const [isMouseDown, setMouseDown] = useState<boolean>(false);
  const [selectedBoxes, setSelectedBoxes] = useState<number[]>([]);

  const handleMouseDown = (boxNumber: number) => {
    setMouseDown(true);
    setSelectedBoxes([boxNumber]);
  };

  const handleMouseUp = () => {};

  const handleMouseEnter = (boxNumber: number) => {
    if (isMouseDown) {
      const startBox = selectedBoxes[0];
      const endBox = boxNumber;

      const startRow = Math.floor((startBox - 1) / cols);
      const startCol = (startBox - 1) % cols;

      const endRow = Math.floor((endBox - 1) / cols);
      const endCol = (endBox - 1) % cols;

      const minRow = Math.min(startRow, endRow);
      const maxRow = Math.max(startRow, endRow);
      const minCol = Math.min(startCol, endCol);
      const maxCol = Math.max(startCol, endCol);

      const selected = [];
      for (let row = minRow; row <= maxRow; row++) {
        for (let col = minCol; col <= maxCol; col++) {
          selected.push(row * cols + col + 1);
        }
      }

      setSelectedBoxes(selected);
    }
  };

  return (
    <div
      className="grid"
      // @ts-ignore
      style={{ "--rows": rows, "--cols": cols }}
      onMouseUp={handleMouseUp}
    >
      {[...Array(rows * cols).keys()].map((_, i) => {
        return (
          <div
            key={i}
            className={`box ${selectedBoxes.includes(i + 1) ? "selected" : ""}`}
            onMouseDown={() => handleMouseDown(i + 1)}
            onMouseEnter={() => handleMouseEnter(i + 1)}
          >
            {i + 1}
          </div>
        );
      })}
    </div>
  );
};
