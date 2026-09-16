import styles from "./NotFoundPage.module.css";

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage = (props: NotFoundPageProps) => {
  const { className } = props;

  return (
    <div className={`${styles.notFoundPage} ${className ?? ""}`}>
      <h1>Страница не найдена</h1>
    </div>
  );
};

export default NotFoundPage;