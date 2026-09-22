import { PlannerViewport } from "@/widgets/planner-viewport";
import { PlannerSidebar } from "@/widgets/planner-sidebar";
import { PlannerToolbar } from "@/widgets/planner-toolbar";
import { PlannerFooter } from "@/widgets/planner-footer";
import { useState } from "react";
import styles from "./PlannerPage.module.css";

interface PlannerPageProps {
  className?: string;
}

const PlannerPage = (props: PlannerPageProps) => {
  const { className } = props;
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);

  return (
    <div 
      className={`
        ${styles.plannerPage} 
        ${className ?? ""} 
        ${sidebarCollapsed ? styles.sidebarCollapsed : ""} 
      `}
    >
      <PlannerViewport className={styles.plannerViewport} />
      <PlannerSidebar 
        className={styles.plannerSidebar} 
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(prev => !prev)}
      />
      <PlannerToolbar className={styles.plannerToolbar} />
      <PlannerFooter className={styles.plannerFooter} />
    </div>
  );
};

export default PlannerPage;