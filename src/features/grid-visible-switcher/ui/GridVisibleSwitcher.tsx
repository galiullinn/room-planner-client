import { Button } from "@/shared/ui/button";
import { toggleGridVisible, useGridVisible } from "@/entities/scene";
import styles from "./GridVisibleSwitcher.module.css";

interface GridVisibleSwitcherProps {
  className?: string;
}

export const GridVisibleSwitcher = (props: GridVisibleSwitcherProps) => {
  const { className } = props;
  const gridVisible = useGridVisible();

  return (
    <Button 
      className={`${styles.gridVisibleSwitcher} ${className ?? ""}`}
      onClick={toggleGridVisible}
      title="Изменить видимость сетки"
    >
      {gridVisible === true ? "ON" : "OFF"}
    </Button>
  );
};