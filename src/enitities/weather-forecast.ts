export interface Location {
  title?: string;
  woeid?: number;
}

export interface OneDay {
  applicable_date: string;
  min_temp: number;
  max_temp: number;
}

interface Forecast {
  consolidated_weather: Array<OneDay>;
}

interface WeatherActions {
  setListLocation: (list: Array<object>) => void;
  getListLocation: ({ query: string }) => void;
  getWeatherForecast: (pathName: string) => void;
}
export interface WeatherState {
  listLocation?: { loading: boolean; data: Array<Location> | null; error: object | null };
  weatherForecast?: { loading: boolean; data: Forecast | null; error: object | null };
  weatherActions?: WeatherActions;
}
