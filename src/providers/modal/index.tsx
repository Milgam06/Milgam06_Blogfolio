import { createContext, useContext, useState } from "react";

import { ModalProps, Modal } from "@/components";

export interface ModalContextProps {
  open: (props: ModalProps) => void;
  close: () => void;
  closeAll: () => void;
}

export const ModalContext = createContext<ModalContextProps | null>(null);

export const ModalProvider: React.FC<ModalProps> = ({ children }) => {
  const [modal, setModal] = useState<ModalProps[]>([]);
  const open = (props: ModalProps) => {
    setModal((prev) => [...prev, props]);
  };
  const close = () => {
    setModal((prev) => prev.slice(1));
  };
  const closeAll = () => {
    setModal([]);
  };
  return (
    <>
      <ModalContext.Provider value={{ open, close, closeAll }}>
        {modal.length > 0 && (
          <Modal.Overlay>
            <Modal {...modal[0]} />
          </Modal.Overlay>
        )}
        {children}
      </ModalContext.Provider>
    </>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context)
    throw new Error("useModal() must be used within a ModalProvider");

  return context;
};
