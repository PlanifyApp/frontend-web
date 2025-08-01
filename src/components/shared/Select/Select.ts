export interface SelectProps {
    modelValue: string | number | object | null;
    label?: string;
    placeholder?: string;
    optionLabel?: string;
    optionValue?: string;
    disabled?: boolean;
    options?: Array<any>;
    message?: string;
    showMessage?: boolean;
    severity?: 'success' | 'info' | 'warn' | 'error' | 'secondary' | 'contrast';
}