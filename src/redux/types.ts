export const GET_WEATHER = 'GET_WEATHER'
export const SET_LOADING = 'SET_LOADING'
export const SET_ERROR = 'SET_ERROR'
export const SET_ALERT = 'SET_ALERT'

export interface Weather {
    description : string,
    icon: string,
    id: number,
    main: string 
}

export interface WeatherData {
    location: {
        name: string,
        region: string,
        country: string,
        lat: number,
        lon: number,
        tz_id: string,
        localtime_epoch: number,
        localtime: string
    },
    current: {
        last_updated_epoch: number,
        last_updated: string,
        temp_c: number,
        temp_f: number,
        is_day: number,
        condition: {
            text: string,
            icon: string,
            code: number
        },
        wind_mph: number,
        wind_kph: number,
        wind_degree: number,
        wind_dir: string,
        pressure_mb: number,
        pressure_in: number,
        precip_mm: number,
        precip_in: number,
        humidity: number,
        cloud: number,
        feelslike_c: number,
        feelslike_f: number,
        vis_km: number,
        vis_miles: number,
        uv: number,
        gust_mph: number,
        gust_kph: number
    }
}

export interface WeatherError {
    cod: string;
    message: string;
}

export interface WeatherState {
    data: WeatherData | null;
    loading: boolean;
    error: string;
}

export interface GetWeatherAction {
    type: typeof GET_WEATHER;
    payload: WeatherData;
}

export interface SetLoadingAction {
    type: typeof SET_LOADING;
    payload: WeatherData;
}

export interface SetErrorAction {
    type: typeof SET_ERROR;
    payload: WeatherData;
}

// export type WeatherAction = GetWeatherAction | SetLoadingAction | SetErrorAction

export interface AlertAction {
    type: typeof SET_ALERT;
    payload: string;
}

export interface AlertState {
    message: string
}