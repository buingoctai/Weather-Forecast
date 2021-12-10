import React, { useCallback, useRef, useContext } from 'react';
import useListlocationManager from '../../hooks/use-list-location-manager';
import useDebounceSearch from '../../hooks/use-debounce-search';
import useCachedListLocation from '../../hooks/use-cached-list-location';

import Search from 'srcRoot/components/Search';
import { WeatherContext } from 'srcRoot/context/stores/WeatherStore';
import { WeatherState } from 'srcRoot/enitities/weather-forecast';
import ListLocation from '../list-location';
import { Option } from 'srcRoot/components/Options';
import './style.scss';

const SearchLocation = () => {
  const searchRef = useRef(null);
  const {
    listLocation,
    weatherActions: { setListLocation, getListLocation, getWeatherForecast },
  }: WeatherState = useContext(WeatherContext);

  const { processListLocation } = useCachedListLocation();
  const onStartingSearchList = useCallback(
    (e) => {
      // getListLocation({ query: searchRef.current.value });
      processListLocation(
        setListLocation,
        getListLocation,
        listLocation,
        {query:searchRef.current.value}
      );
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
    getListLocation({ query: option.name });
    processListLocation(
      setListLocation,
      getListLocation,
      listLocation,
      {query:searchRef.current.value}
    );
    getWeatherForecast(`${option.id}`);
  }, []);

  // Flow auto select nếu chỉ còn một auto chọn
  // useEffect(() => {
  //   if(listLocation?.data?.length === 1) {
  //     const one = listLocation.data[0];
  //     onSelectLocation({name:one.title, id:one.woeid});
  //   }
  //   console.log('taibnlogs',searchRef.current.value);

  // },[searchRef.current]);

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
      <ListLocation onSelectLocation={onSelectLocation} />
    </>
  );
};

export default SearchLocation;
