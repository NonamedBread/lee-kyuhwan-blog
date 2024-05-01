import { FC, ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ children, open, onClose }) => {
  return (
    open && (
      <div
        className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50"
        onClick={onClose} // 모달 외부를 클릭하면 모달이 닫히도록 합니다.
      >
        <div
          className="rounded bg-white p-6 dark:bg-customGreay-800 dark:text-customGreay-200"
          onClick={(event) => event.stopPropagation()} // 모달 내부에서의 클릭이 모달 외부에서의 클릭으로 간주되지 않도록 합니다.
        >
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
