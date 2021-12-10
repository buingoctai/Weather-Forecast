import React from 'react';
import Options, { Option } from 'srcRoot/components/Options';
import Loading from 'srcRoot/components/Loading';

interface Props {
  isLoading: boolean;
  options: Array<Option>;
  onClick: (option: Option) => any;
}
const Content = (props: Props) => {
  const { isLoading, options, onClick } = props;

  if (isLoading) {
    return (
      <div
        style={{
          width: '150px',
          height: '80px',
        }}
        className="flx-center"
      >
        <Loading size={32} loadingWidth={2} />
      </div>
    );
  }

  if (options.length === 0) {
    return (
      <div
        style={{
          width: '200px',
          height: 'fit-content',
          textAlign: 'center',
          color: 'var(--neutral-500)',
        }}
      >
        Empty
      </div>
    );
  }

  return <Options options={options} onClick={onClick} />;
};

export default React.memo(Content);
