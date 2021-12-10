import React, { forwardRef } from 'react';
import Input from 'srcRoot/components/Input';
import IconSearch from 'srcRoot/static/svg/icon-outline-search-v2.svg';

import './style.scss';

interface Props {
  text?: string;
  placeholder?: string;
  className?: string;
  style?: object;
  autoFocus?: boolean;
  onChange?: (params: any) => any;
  onClick?: (e: any) => void;
}

const Search = (props: Props, ref) => {
  const {
    text = '',
    placeholder = '',
    className = '',
    style = {},
    autoFocus = true,
    onChange = () => {},
    onClick = () => {},
  } = props;

  return (
    <div className="seach__entry_input">
      <img src={IconSearch} />

      <Input
        ref={ref}
        text={text}
        placeholder={placeholder}
        className={`entry__input ${className}`}
        style={style}
        autoFocus={autoFocus}
        onChange={onChange}
        onClick={onClick}
      />
    </div>
  );
};

export default forwardRef(Search);
