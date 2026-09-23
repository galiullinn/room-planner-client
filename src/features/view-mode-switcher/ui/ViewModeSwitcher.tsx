import { toggleViewMode, useViewMode } from "@/entities/scene";
import { Button } from "@/shared/ui/button";
import styles from "./ViewModeSwitcher.module.css";

interface ViewModeSwitcherProps {
  className?: string;
}

export const ViewModeSwitcher = (props: ViewModeSwitcherProps) => {
  const { className } = props;
  const viewMode = useViewMode();

  return (
    <Button 
      className={`${styles.viewModeSwitcher} ${className ?? ""}`}
      onClick={toggleViewMode}
      title="Переключить режим отображения"
    >
      {viewMode === "2d" ? "2D" : "3D"}
    </Button>
  );
};