import { PlannerViewport } from "@/widgets/planner-viewport";
import { PlannerSidebar } from "@/widgets/planner-sidebar";
import { PlannerToolbar } from "@/widgets/planner-toolbar";
import { PlannerFooter } from "@/widgets/planner-footer";
import styles from "./PlannerPage.module.css";

interface PlannerPageProps {
  className?: string;
}

const PlannerPage = (props: PlannerPageProps) => {
  const { className } = props;

  return (
    <div className={`${styles.plannerPage} ${className ?? ""}`}>
      <PlannerViewport className={styles.plannerViewport} />
      <PlannerSidebar className={styles.plannerSidebar} />
      <PlannerToolbar className={styles.plannerToolbar} />
      <PlannerFooter className={styles.plannerFooter} />
    </div>
  );
};

export default PlannerPage;