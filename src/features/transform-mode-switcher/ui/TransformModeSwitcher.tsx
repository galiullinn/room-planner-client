import { setTransformMode, useTransformMode } from "@/entities/scene";
import type { TransformMode } from "@/entities/scene";
import styles from "./TransformModeSwitcher.module.css";

interface TransformModeSwitcherProps {
  className?: string;
}

const MODES: { value: TransformMode; label: string; title: string }[] = [
  { value: "translate", label: "T", title: "Перемещение (G)" },
  { value: "rotate",    label: "R", title: "Вращение (R)" },
  { value: "scale",     label: "S", title: "Масштаб (S)" },
];

export const TransformModeSwitcher = (props: TransformModeSwitcherProps) => {
  const { className } = props;
  const transformMode = useTransformMode();

  return (
    <div
      className={`${styles.group} ${className ?? ""}`}
      role="group"
      aria-label="Режим трансформации"
    >
      {MODES.map(({ value, label, title }) => (
        <button
          key={value}
          type="button"
          className={`${styles.btn} ${transformMode === value ? styles.active : ""}`}
          onClick={() => setTransformMode(value)}
          title={title}
          aria-pressed={transformMode === value}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
