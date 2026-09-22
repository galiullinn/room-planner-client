import { Button } from "@/shared/ui/button";
import CollapsedIcon from "@/shared/assets/icons/collapsed-icon.svg?react";
import styles from "./PlannerSidebar.module.css";

interface PlannerSidebarProps {
  className?: string;
  collapsed: boolean;
  onToggle: () => void;
}

export const PlannerSidebar = (props: PlannerSidebarProps) => {
  const { className, collapsed, onToggle } = props;

  return (
    <div 
      className={`
        ${styles.plannerSidebar} 
        ${className ?? ""} 
        ${collapsed ? styles.collapsed : ""}
      `}
    >
      <div className={styles.sidebarHeader}>
        <Button onClick={onToggle} className={styles.toggleButton}>
          <CollapsedIcon width={20} />
        </Button>
      </div>
      <div className={`${styles.sidebarContent} ${collapsed ? "visually-hidden" : ""}`}>
        Sidebar
      </div>
    </div>
  );
};