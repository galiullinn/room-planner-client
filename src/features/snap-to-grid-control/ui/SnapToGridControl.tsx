import { Button } from "@/shared/ui/button";
import { setGridStep, toggleSnapToGrid, useGridStep, useSnapToGrid } from "@/entities/scene";
import { Input } from "@/shared/ui/input";
import type { ChangeEvent } from "react";
import SnapToGridIcon from "@/shared/assets/icons/snap-to-grid-icon.svg?react";
import styles from "./SnapToGridControl.module.css";

interface SnapToGridControlProps {
  className?: string;
}

export const SnapToGridControl = (props: SnapToGridControlProps) => {
  const { className } = props;
  const snapToGrid = useSnapToGrid();
  const gridStep = useGridStep();

  const handleGridStepChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);

    if (Number.isFinite(value) && value > 0) {
      setGridStep(value);
    }
  };

  return (
    <div className={`${styles.snapToGridControl} ${className ?? ""}`}>
      <Button 
        onClick={toggleSnapToGrid}
        title='Привязка к сетке'
      >
        <SnapToGridIcon width={20} />
      </Button>
      <Input 
        type="number"
        min="0.01"
        step="0.01"
        value={gridStep}
        disabled={!snapToGrid}
        onChange={handleGridStepChange}
        aria-label="Шаг сетки"
      />
    </div>
  );
};