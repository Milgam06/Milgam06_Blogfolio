import { createContext, memo, useCallback, useContext, useState } from 'react';

import { ModalProps, Modal } from '@/components';
import { AnimatePresence } from 'framer-motion';

export interface ModalContextProps {
  open: (props: ModalProps) => void;
  close: () => void;
}

export const ModalContext = createContext<ModalContextProps | null>(null);

export const ModalProvider: React.FC<ModalProps> = memo(({ children }) => {
  const [modal, setModal] = useState<ModalProps | undefined>(undefined);

  const open = useCallback((props: ModalProps) => {
    setModal(props);
  }, []);

  const close = useCallback(() => {
    setModal(undefined);
  }, []);

  const isModalOpen = modal !== undefined;
  return (
    <>
      <ModalContext.Provider value={{ open, close }}>
        <AnimatePresence>
          {isModalOpen && (
            <Modal.Overlay onCloseClick={close}>
              <Modal {...modal} />
            </Modal.Overlay>
          )}
        </AnimatePresence>
        {children}
      </ModalContext.Provider>
    </>
  );
});

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal() must be used within a ModalProvider');

  return context;
};
