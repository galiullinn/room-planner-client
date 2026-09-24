import { toggleGridVisible } from "@/entities/scene";
import { Button } from "@/shared/ui/button";
import GridVisibleIcon from "@/shared/assets/icons/grid-visible-icon.svg?react";
import styles from "./GridVisibleSwitcher.module.css";

interface GridVisibleSwitcherProps {
  className?: string;
}

export const GridVisibleSwitcher = (props: GridVisibleSwitcherProps) => {
  const { className } = props;

  return (
    <Button 
      className={`${styles.gridVisibleSwitcher} ${className ?? ""}`}
      onClick={toggleGridVisible}
    >
      <GridVisibleIcon width={20} /> 
    </Button>
  );
};