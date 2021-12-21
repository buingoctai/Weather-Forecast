import React from 'react';
import IconEmpty from 'srcRoot/static/image/icon-empty-search.png';
import LogSytem from 'srcRoot/utils/log-system';

const EmptyForecast = () => {
  LogSytem.log('Re-render: [List-Forecast]=>[Empty-Forecast]');

  return (
    <div className="flx-center list-forecast flx-col">
      <img src={IconEmpty} width={80} height={80} />
      <h4 style={{ color: 'var(--neutral-500)', fontSize: '15px' }}>Empty Weather Forecast</h4>
    </div>
  );
};

export default React.memo(EmptyForecast);
