import { ViewModeSwitcher } from "@/features/view-mode-switcher";
import { GridVisibleSwitcher } from "@/features/grid-visible-switcher";
import styles from "./PlannerToolbar.module.css";

interface PlannerToolbarProps {
  className?: string;
}

export const PlannerToolbar = (props: PlannerToolbarProps) => {
  const { className } = props;

  return (
    <div className={`${styles.plannerToolbar} ${className ?? ""}`}>
      <ViewModeSwitcher />
      <GridVisibleSwitcher />
    </div>
  );
};