import React from "react";

type Props = {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
};

export default function Modal({ open, children, onClose }: Props) {
  if (!open) return null;
  return (
    <div
      className="modal"
      onClick={(event) =>
        event.target === event.currentTarget ? onClose() : null
      }
    >
      <div className="modal-content">{children}</div>
    </div>
  );
}
