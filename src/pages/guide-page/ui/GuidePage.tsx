import styles from "./GuidePage.module.css";

interface GuidePageProps {
  className?: string;
}

const GuidePage = (props: GuidePageProps) => {
  const { className } = props;

  return (
    <div className={`${styles.guidePage} ${className ?? ""}`}>
      <h1>В разработке</h1>
    </div>
  );
};

export default GuidePage;