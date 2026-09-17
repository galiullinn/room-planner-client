import { useState } from "react";
import { Button } from "@/shared/ui/button";
import SwitchIcon from "@/shared/assets/icons/switch-icon.svg?react";
import styles from "./PlannerSidebar.module.css";

interface PlannerSidebarProps {
  className?: string;
}

export const PlannerSidebar = (props: PlannerSidebarProps) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const onToggle = () => setCollapsed(prev => !prev);

  return (
    <div className={`${styles.plannerSidebar} ${className ?? ""} ${collapsed ? styles.collapsed : ""}`}>
      <div className={styles.sidebarHeader}>
        <Button onClick={onToggle} className={styles.toggleButton}>
          <SwitchIcon width={20} />
        </Button>
      </div>
      <div className={`${styles.sidebarContent} ${collapsed ? "visually-hidden" : ""}`}>
        sidebar
      </div>
    </div>
  );
};