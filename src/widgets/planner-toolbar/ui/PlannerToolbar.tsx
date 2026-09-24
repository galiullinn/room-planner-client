import { ViewModeSwitcher } from "@/features/view-mode-switcher";
import { GridVisibleSwitcher } from "@/features/grid-visible-switcher";
import { TransformModeSwitcher } from "@/features/transform-mode-switcher";
import { SnapToGridControl } from "@/features/snap-to-grid-control";
import styles from "./PlannerToolbar.module.css";
import { Separator } from "@/shared/ui/separator";

interface PlannerToolbarProps {
  className?: string;
}

export const PlannerToolbar = (props: PlannerToolbarProps) => {
  const { className } = props;

  return (
    <div className={`${styles.plannerToolbar} ${className ?? ""}`}>
      <ViewModeSwitcher />
      <GridVisibleSwitcher />
      <Separator />
      <TransformModeSwitcher />
      <Separator />
      <SnapToGridControl />
    </div>
  );
};