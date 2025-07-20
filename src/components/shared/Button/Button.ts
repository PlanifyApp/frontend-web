export interface ButtonProps {
    label?: string;
    type?: 'primary' | 'secondary' | 'tertiary';
    typeButton?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    icon?: string;
    iconPos?: 'left' | 'right';
}
