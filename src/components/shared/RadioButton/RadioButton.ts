export interface RadioButtonProps {
    modelValue: string | number | boolean;
    value: string| number | boolean;
    label?: string;
    disabled?: boolean;
    type?: 'default' | 'chip' | 'item'
}