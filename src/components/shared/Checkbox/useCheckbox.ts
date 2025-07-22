import type { CheckboxProps } from './CheckboxProps.ts';

export const useCheckbox = (props: CheckboxProps) => {
  const checkboxClass = () => {
    let baseClass = 'tw-flex tw-items-center tw-gap-2';
    let boxClass = 'tw-w-5 tw-h-5 tw-rounded tw-border tw-border-gray-300 tw-flex tw-items-center tw-justify-center';
    let checkedClass = '';

    switch (props.type) {
      case 'primary':
        checkedClass = 'tw-bg-primary tw-border-primary tw-text-white';
        break;
      case 'secondary':
        checkedClass = 'tw-bg-gray-200 tw-border-gray-400 tw-text-black';
        break;
      default:
        checkedClass = '';
    }

    return {
      wrapper: baseClass,
      box: boxClass,
      checked: checkedClass,
    };
  };

  return { checkboxClass };
};
