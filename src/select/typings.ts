import { ReactNode } from 'react';

export type SelectProps = {
  options: Array<OptionShape>;
  placeholder?: string;
  block?: boolean;
  disabled?: boolean;
  error?: ErrorMessage;
  hint?: string;
  size?: Size;
  arrow?: boolean;
  visibleOptions?: number;
  defaultOpen?: boolean;
  optionListWidth?: OptionListWidth;
  label?: string;
  closeOnSelect?: boolean;
  allowUnselect?: boolean;
  multiple?: boolean;
};

export type DropdownProps = {
  options: Array<OptionShape>;
  onClick: (option: OptionShape) => void;
  visible: boolean;
  activeKeys: Array<Key>;
  visibleOptions: number;
  size: Size;
  optionListWidth: OptionListWidth;
};

export type DropdownItemProps = {
  option: OptionShape;
  onClick: (option: OptionShape) => void;
  activeKeys: Array<Key>;
  size: Size;
  isFullWidth: boolean;
  setHeight: (height: number) => void
};

export type ArrowProps = {
  visible: boolean;
  isDropdownOpen: boolean;
};

export type InputProps = {
  children: string | undefined;
  size: Size;
  error: ErrorMessage;
  handleInputClick: () => void;
  visibleArrow: boolean;
  isDropdownOpen: boolean;
  label?: string;
  disabled?: boolean;
};

export type SubInputProps = {
  error?: ErrorMessage;
  hint?: string;
};

export type SelectWrapperProps = {
  block?: boolean;
  children: ReactNode;
};

export type Key = string | number;

export type Size = 's' | 'm' | 'l' | 'xl';

export type ErrorMessage = string;

export type OptionListWidth = 'field' | 'content';

export type OptionShape = {
  key: Key;
  content: string;
};
