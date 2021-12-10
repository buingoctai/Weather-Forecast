import React, { useContext } from 'react';
import Popover from '@taibn.dev.vn/h-popover';
import { LIST_LOCATION_POP_IDENTITY } from 'srcRoot/utils/constants';
import { WeatherContext } from 'srcRoot/context/stores/WeatherStore';
import { WeatherState } from 'srcRoot/enitities/weather-forecast';
import Content from './content';
import { ToastManager, TOAST_TYPE } from 'srcRoot/components/Toast';
import { Option } from 'srcRoot/components/Options';

interface Props {
  onSelectLocation?: (option: Option) => any;
}
const convert2Options = (list) => {
  return list.map((l) => {
    return {
      id: l['woeid'],
      name: l['title'],
    };
  });
};
const ListLocation = (props: Props) => {
  const { onSelectLocation } = props;
  const { listLocation }: WeatherState = useContext(WeatherContext);

  if (listLocation?.data?.length === 0) {
    ToastManager.show({
      text: 'Try again with the valid city.',
      type: TOAST_TYPE.INFO,
      noBackground: true,
      duration: 5000,
    });
  }

  return (
    <Popover
      identity={LIST_LOCATION_POP_IDENTITY}
      content={
        <Content
          isLoading={listLocation.loading}
          options={convert2Options(listLocation.data || [])}
          onClick={onSelectLocation}
        />
      }
      deltaPosition={{ top: 6 }}
    />
  );
};

export default React.memo(ListLocation);
