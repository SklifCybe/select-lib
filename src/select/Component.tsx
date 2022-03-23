import React, { FC, useState, useEffect, useRef } from 'react';

import { SelectWrapper } from './components/SelectWrapper';
import { Dropdown } from './components/Dropdown';
import { Input } from './components/Input';
import { SubInput } from './components/SubInput';
import { useClickOutside } from './utils/useClickOutside';
import { SelectProps, OptionShape, Key } from './typings';

import '@/styles/index.css';

export const Select: FC<SelectProps> = ({
  options,
  placeholder,
  block = false,
  disabled = false,
  error = '',
  hint = '',
  size = 's',
  arrow = true,
  visibleOptions = 5,
  defaultOpen = false,
  optionListWidth = 'field',
  label = '',
  closeOnSelect = true,
  allowUnselect = true,
  multiple = false,
}) => {
  const [inputText, setInputText] = useState(placeholder);
  const [activeItems, setActiveItems] = useState<Array<Key>>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(defaultOpen);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useClickOutside(wrapperRef, setIsDropdownOpen);

  useEffect(() => {
    if (!activeItems) {
      setInputText(placeholder);
    }
  }, [placeholder, activeItems]);

  useEffect(() => {
    setIsDropdownOpen(defaultOpen);
  }, [defaultOpen]);


  const handleInputClick = () => {
    if (disabled) return;
    setIsDropdownOpen((prevValue) => !prevValue);
  };

  const filteredString = (str: string | undefined, term: string) =>
    str?.replace(RegExp(`${term}, |, ${term}|${term}`, 'i'), '');

  const handleDropdownItemClick = (option: OptionShape) => {
    if (multiple && !activeItems.includes(option.key)) {
      setActiveItems((prevItems) => [...prevItems, option.key]);
      setInputText((prevText) => {
        if (prevText === placeholder) {
          return option.content;
        }
        return `${prevText}, ${option.content}`;
      });
    } else if (!multiple) {
      setActiveItems([option.key]);
      setInputText(option.content);
    }

    if (allowUnselect && activeItems.includes(option.key)) {
      setActiveItems((prevItems) => prevItems.filter((item) => item !== option.key));
      setInputText((prevText) => {
        if (prevText === option.content) {
          return placeholder;
        }
        return filteredString(prevText, option.content);
      });
    }

    if (closeOnSelect) {
      setIsDropdownOpen(false);
    }
  };

  return (
    <SelectWrapper block={block} ref={wrapperRef}>
      <Input
        size={size}
        error={error}
        handleInputClick={handleInputClick}
        visibleArrow={arrow}
        label={inputText !== placeholder ? label : ''}
        isDropdownOpen={isDropdownOpen}
        disabled={disabled}>
        {inputText}
      </Input>
      <Dropdown
        visible={isDropdownOpen}
        options={options}
        onClick={handleDropdownItemClick}
        activeKeys={activeItems}
        visibleOptions={visibleOptions}
        size={size}
        optionListWidth={optionListWidth}
      />
      <SubInput error={error} hint={hint} />
    </SelectWrapper>
  );
};