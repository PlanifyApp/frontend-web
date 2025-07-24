import type { CheckboxProps } from './CheckboxProps';

export const useCheckbox = (props: CheckboxProps) => {
  const checkboxClass = () => {
    const wrapper = 'tw-flex tw-items-center tw-gap-2';

    const box =
      'tw-w-5 tw-h-5 tw-rounded tw-border tw-border-gray-300 ' +
      'tw-flex tw-items-center tw-justify-center';

    let checked = '';

    switch (props.type) {
      case 'primary':
        checked = 'tw-bg-primary tw-border-primary tw-text-white';
        break;
      case 'secondary':
        checked = 'tw-bg-gray-200 tw-border-gray-400 tw-text-black';
        break;
      default:
        checked = '';
    }

    return { wrapper, box, checked };
  };

  return { checkboxClass };
};
