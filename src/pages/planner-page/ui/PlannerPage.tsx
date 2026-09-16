import styles from "./PlannerPage.module.css";

interface PlannerPageProps {
  className?: string;
}

const PlannerPage = (props: PlannerPageProps) => {
  const { className } = props;

  return (
    <div className={`${styles.plannerPage} ${className ?? ""}`}>
      <h1>Планнер</h1>
    </div>
  );
};

export default PlannerPage;