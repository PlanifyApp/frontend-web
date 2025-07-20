import { ButtonProps } from "./Button";

export const useButton = (props: ButtonProps) => {
  const buttonClass = () => {
    let baseClass = "tw-w-full";
    let typeClass = "";

    switch (props.type) {
      case "primary":
        typeClass =
          "!tw-bg-primary !tw-text-white !tw-border-0 hover:!tw-bg-primary-hover active:!tw-bg-dark-blue";
        break;
      case "secondary":
        typeClass =
          "!tw-bg-white !tw-text-secondary !tw-border-secondary hover:!tw-border-primary hover:!tw-text-primary active:!tw-bg-secondary-active active:!tw-border-secondary active:!tw-text-secondary";
        break;
      case "tertiary":
        typeClass =
          "!tw-bg-white !tw-text-tertiary !tw-border-0 hover:!tw-text-primary";
        break;
      default:
        typeClass = "";
    }

    return `${baseClass} ${typeClass}`;
  };

  return {
    buttonClass,
  };
};
