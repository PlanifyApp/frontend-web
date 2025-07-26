export interface InputTextProps {
    value: string;
    placeholder?: string;
    type?: 'text' | 'password' | 'email' | 'search' | 'tel' | 'url';
    label?: string;
    disabled?: boolean;
    readonly?: boolean;
    message?: string;
    showMessage?: boolean;
    severity?: 'success' | 'info' | 'warn' | 'error' | 'secondary' | 'contrast';
}