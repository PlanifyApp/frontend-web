// ReusableToastProps.ts

export interface ReusableToastProps {
  group?: string;
  position?: 'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center';
  type?: 'primary' | 'secondary';
}

export interface ToastOptions {
  severity?: 'success' | 'info' | 'warn' | 'error' | 'secondary' | 'contrast';
  summary: string;
  detail?: string;
  life?: number;
  closable?: boolean;
}
