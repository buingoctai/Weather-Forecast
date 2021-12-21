import React, { useCallback, useRef, useContext } from 'react';
import useListlocationManager from '../../hooks/use-list-location-manager';
import useDebounceSearch from '../../hooks/use-debounce-search';
import useCachedListLocation from '../../hooks/use-cached-list-location';

import Search from 'srcRoot/components/Search';
import ListLocation from '../list-location';
import { Option } from 'srcRoot/components/Options';
import { ListLocationState, WeatherActions } from 'srcRoot/enitities/weather-forecast';
import LogSytem from 'srcRoot/utils/log-system';
import './style.scss';

interface Props {
  listLocation: ListLocationState;
  weatherActions: WeatherActions;
}
const SearchLocation = (props: Props) => {
  LogSytem.log('Re-render: [Search-Location]');
  const searchRef = useRef(null);
  const {
    listLocation,
    weatherActions: { setListLocation, getListLocation, getWeatherForecast },
  } = props;

  const { processListLocation } = useCachedListLocation();
  const onStartingSearchList = useCallback(
    (e) => {
      /*
       Server doesn't support for empty area. 
       A noti toast will display in this case.
      */
      getListLocation({ query: searchRef.current.value }); // Always fetch new list from sevver
      // processListLocation(setListLocation, getListLocation, listLocation, { // Consider get from cache
      //   query: searchRef.current.value,
      // });
      openListPop(e);
    },
    [listLocation]
  );

  const { openListPop, closeListPop } = useListlocationManager();
  const { onChangeTextSeach } = useDebounceSearch({ callback: onStartingSearchList });
  /*
    Force update selected location to input
    Warning: Have to update listLocation with selected location 
    because onChangeTextSeach event not trigger on assigning value to input manually
  */
  const onSelectLocation = useCallback((option: Option) => {
    searchRef.current.value = option.name;

    closeListPop();
    getListLocation({ query: option.name }); // Always fetch new list from sevver
    // processListLocation(setListLocation, getListLocation, listLocation, { // Consider get from cache
    //   query: searchRef.current.value,
    // });
    getWeatherForecast(`${option.id}`);
  }, []);

  return (
    <>
      <div className="search-wrapper">
        <Search
          ref={searchRef}
          text=""
          placeholder="Search"
          style={{ borderRadius: '5px' }}
          onChange={onChangeTextSeach}
          onClick={openListPop}
        />
      </div>
      <ListLocation listLocation={listLocation} onSelectLocation={onSelectLocation} />
    </>
  );
};

export default SearchLocation;
