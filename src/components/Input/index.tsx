import React, { forwardRef, ChangeEvent } from 'react';
import './style.scss';

interface Props {
  text?: string;
  placeholder?: string;
  className?: string;
  style?: object;
  autoFocus?: boolean;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onClick?: (e: any) => void;
}

const Input = (props: Props, ref) => {
  const {
    text = '',
    placeholder = '',
    className = '',
    style = {},
    autoFocus = true,
    disabled,
    onChange = () => {},
    onBlur = () => {},
    onClick = () => {},
  } = props;

  const initValue = text ? { value: text } : {};

  return (
    <input
      ref={ref}
      placeholder={placeholder}
      style={style}
      className={`txt__entry__input ${className}`}
      type="text"
      id="lname"
      name="lname"
      {...initValue}
      disabled={disabled}
      autoFocus={autoFocus}
      autoComplete="off"
      onChange={onChange}
      onBlur={onBlur}
      onClick={onClick}
    />
  );
};

export default forwardRef(Input);
