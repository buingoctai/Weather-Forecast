import { Location } from 'srcRoot/enitities/weather-forecast';

let markedFetch = false;
let initList = [];
let cached = false;
const useCachedListLocation = () => {
  const processListLocation = (
    setListLocation: (list: Array<object>) => void,
    getListLocation: ({ query: string }) => void,
    listLocation: { loading: boolean; data: Array<Location> | null; error: object | null },
    payload: { query: string }
  ) => {
    if (!listLocation.data || listLocation.data.length === 0) markedFetch = false;
    if (markedFetch) {
      if (payload.query) {
        if (!cached) {
          initList = listLocation.data;
          cached = true;
        }
        const newList = initList.filter((l) => l.title.toLowerCase().includes(payload.query));
        setListLocation(newList);
      } else {
        setListLocation([]);
        markedFetch = false;
      }
    } else {
      markedFetch = true;
      getListLocation(payload);
    }
  };

  return {
    processListLocation,
  };
};

export default useCachedListLocation;
