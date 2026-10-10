export interface WeatherApiResponse {
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
    humidity: number;
  };
  weather: Array<{
    description: string;
  }>;
}

export interface CurrentWeatherResponse {
  city: string;
  country: string;
  temperature: number;
  description: string;
  humidity: number;
}