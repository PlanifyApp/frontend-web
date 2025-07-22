import { RadioButtonProps } from "./RadioButton";

export const useRadioButton = (props: RadioButtonProps) => {
    const radioClass = () => {
        let baseClass = "tw-align-middle tw-w-full";
        let typeClass = "";

        switch (props.type) {
            case 'chip':
                typeClass = 'tw-px-4 tw-py-2 tw-rounded-full tw-border tw-cursor-pointer' +
          'tw-text-sm ' +
          'tw-flex tw-items-center tw-gap-2 ' +
          'tw-bg-white tw-border-gray-300 ' +
          'tw-text-gray-700 ' +
          'hover:tw-border-primary hover:tw-bg-primary-light ' +
          'tw-transition';

          if(props.disabled) {
            typeClass += 'tw-opacity-50 tw-cursor-not-allowed';
          }

          break;
        case 'item':
            typeClass =
            'tw-inline-flex tw-items-center tw-gap-2 tw-px-2 tw-py-1 tw-text-sm tw-border-b tw-border-gray-300 ' +
          'hover:tw-border-primary';
          break;
        default:
            typeClass = '';
        }

        return `${baseClass} ${typeClass}`;
    };

    return {radioClass};
};