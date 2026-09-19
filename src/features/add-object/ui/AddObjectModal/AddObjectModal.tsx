import { addObject } from '@/entities/object';
import { objectCatalog } from '../../model/catalog';
import styles from './AddObjectModal.module.css';
import { Modal } from '@/shared/ui/modal';

interface AddObjectModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

const renderShapeIcon = (shape: string, color: string) => {
  switch (shape) {
    case "box":
      return (
        <svg viewBox="0 0 52 52" className={styles.shapeIcon} aria-hidden="true">
          <path d="M26 7 L44 17.5 V35.5 L26 46 L8 35.5 V17.5 Z" fill={color} fillOpacity="0.18" stroke={color} strokeWidth="2" strokeLinejoin="round" />
          <path d="M26 7 L44 17.5 L26 27 L8 17.5 Z" fill={color} fillOpacity="0.4" stroke={color} strokeWidth="2" strokeLinejoin="round" />
          <path d="M26 27 V46" stroke={color} strokeWidth="2" strokeLinecap="round" />
          <path d="M26 27 L44 17.5" stroke={color} strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "sphere":
      return (
        <svg viewBox="0 0 52 52" className={styles.shapeIcon} aria-hidden="true">
          <defs>
            <radialGradient id="sphereGradModal" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
              <stop offset="60%" stopColor={color} stopOpacity="0.35" />
              <stop offset="100%" stopColor={color} stopOpacity="0.1" />
            </radialGradient>
          </defs>
          <circle cx="26" cy="26" r="18" fill="url(#sphereGradModal)" stroke={color} strokeWidth="2" />
          <ellipse cx="26" cy="26" rx="18" ry="7" fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />
          <ellipse cx="26" cy="26" rx="7" ry="18" fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />
        </svg>
      );
    case "cylinder":
      return (
        <svg viewBox="0 0 52 52" className={styles.shapeIcon} aria-hidden="true">
          <ellipse cx="26" cy="15" rx="16" ry="6.5" fill={color} fillOpacity="0.4" stroke={color} strokeWidth="2" />
          <path d="M10 15 V36 C10 39.6 17.2 42.5 26 42.5 C34.8 42.5 42 39.6 42 36 V15" fill={color} fillOpacity="0.18" stroke={color} strokeWidth="2" />
          <ellipse cx="26" cy="36" rx="16" ry="6.5" fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />
        </svg>
      );
    case "cone":
      return (
        <svg viewBox="0 0 52 52" className={styles.shapeIcon} aria-hidden="true">
          <ellipse cx="26" cy="39" rx="16" ry="6" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="2" />
          <path d="M10 39 L26 9 L42 39" fill={color} fillOpacity="0.18" stroke={color} strokeWidth="2" strokeLinejoin="round" />
          <ellipse cx="26" cy="39" rx="16" ry="6" fill="none" stroke={color} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />
        </svg>
      );
    default:
      return null;
  }
};

export const AddObjectModal = (props: AddObjectModalProps) => {
  const { className, isOpen, onClose } = props;

  const handleObjectSelect = (typeId: string) => {
    const object = objectCatalog.find((e) => e.id === typeId);
    if (!object) return;

    const obj = object.create();
    addObject(obj);
    onClose();
  };

  return (
    <Modal 
      className={`${styles.addObjectModal} ${className ?? ""}`}
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerTitles}>
            <h2 className={styles.title}>Добавить объект</h2>
            <p className={styles.subtitle}>Выберите 3D-примитив для размещения на сцене</p>
          </div>
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Закрыть"
            title="Закрыть (Esc)"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className={styles.catalog}>
          {objectCatalog.map((entry) => (
            <button
              key={entry.id}
              type="button"
              className={styles.card}
              onClick={() => handleObjectSelect(entry.id)}
            >
              <div className={styles.iconWrapper}>
                {renderShapeIcon(entry.shape, entry.color)}
              </div>
              <div className={styles.cardInfo}>
                <span className={styles.cardLabel}>{entry.label}</span>
                <span className={styles.cardDesc}>{entry.description}</span>
              </div>
              <div className={styles.cardAction}>
                <span className={styles.addBadge}>Добавить</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </Modal>
  );
};