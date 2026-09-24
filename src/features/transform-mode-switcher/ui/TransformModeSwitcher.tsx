import { Button } from "@/shared/ui/button";
import { setTransformMode } from "@/entities/scene";
import TranslateIcon from "@/shared/assets/icons/translate-icon.svg?react";
import RotateIcon from "@/shared/assets/icons/rotate-icon.svg?react";
import ScaleIcon from "@/shared/assets/icons/scale-icon.svg?react";
import styles from "./TransformModeSwitcher.module.css";

interface TransformModeSwitcherProps {
  className?: string;
}

export const TransformModeSwitcher = (props: TransformModeSwitcherProps) => {
  const { className } = props;

  return (
    <div className={`${styles.transformModeSwitcher} ${className ?? ""}`}>
      <Button 
        onClick={() => setTransformMode("translate")}
        title="Перемещение объекта"
      >
        <TranslateIcon width={20} />
      </Button>
      <Button onClick={() => setTransformMode("rotate")}
        title='Вращение объекта'
      >
        <RotateIcon width={20} />
      </Button>
      <Button onClick={() => setTransformMode("scale")}
        title='Масштабирование объекта'
      >
        <ScaleIcon width={20} />
      </Button>
    </div>
  );
};