import { ViewModeSwitcher } from "@/features/view-mode-switcher";
import { GridVisibleSwitcher } from "@/features/grid-visible-switcher";
import { TransformModeSwitcher } from "@/features/transform-mode-switcher";
import styles from "./PlannerToolbar.module.css";
import { AddObjectButton } from "@/features/add-object";

interface PlannerToolbarProps {
  className?: string;
}

export const PlannerToolbar = (props: PlannerToolbarProps) => {
  const { className } = props;

  return (
    <div className={`${styles.plannerToolbar} ${className ?? ""}`}>
      <AddObjectButton />
      <div className={styles.divider} />
      <TransformModeSwitcher />
      <div className={styles.divider} />
      <ViewModeSwitcher />
      <GridVisibleSwitcher />
    </div>
  );
};