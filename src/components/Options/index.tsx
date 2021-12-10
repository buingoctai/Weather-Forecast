import React from 'react';
import './style.scss';

interface Option {
  key?: string;
  id?: number | null;
  name: string;
}

interface Props {
  options?: Array<Option>;
  onClick: (option: Option) => any;
}

const Option = (props: Props) => {
  const { options = [], onClick = () => {} } = props;

  return (
    <div className="select-wrap__pop">
      <div className="select-wrap__option">
        {options.map((item, idx) => (
          <span key={idx} className="option__item truncate" onClick={() => onClick(item)}>
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export { Option };
export default Option;
