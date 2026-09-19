import { useState } from 'react';
import styles from './AddObjectButton.module.css';
import { Button } from '@/shared/ui/button';
import { AddObjectModal } from '../AddObjectModal/AddObjectModal';

interface AddObjectButtonProps {
  className?: string;
}

export const AddObjectButton = (props: AddObjectButtonProps) => {
  const { className } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button
        className={`${styles.addObjectButton} ${className ?? ""}`}
        onClick={() => setIsOpen(true)}
      >
        Add
      </Button>
      <AddObjectModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};