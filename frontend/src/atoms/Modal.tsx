'use client';

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { ReactNode } from 'react';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
}

export const Modal = ({ open, onClose, title, children, footer }: ModalProps) => {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity data-closed:opacity-0 data-enter:duration-300 data-leave:duration-200"
      />

      <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center sm:p-0">
        <DialogPanel
          transition
          className="relative transform overflow-hidden rounded-2xl bg-background text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-leave:duration-200 sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
        >
          <div className="bg-background px-6 pt-6 pb-4 sm:p-8">
            {title && (
              <DialogTitle as="h3" className="text-lg font-heading text-primary mb-3">
                {title}
              </DialogTitle>
            )}
            <div>{children}</div>
          </div>

          {footer && (
            <div className="bg-white border-t border-gray-200 px-6 py-4 sm:flex sm:flex-row-reverse">
              {footer}
            </div>
          )}
        </DialogPanel>
      </div>
    </Dialog>
  );
};
