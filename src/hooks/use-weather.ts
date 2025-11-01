import type { Coordinates } from "@/api/types";
import { weatherAPI } from "@/api/weather";
import { useQuery } from "@tanstack/react-query";

export const WEATHER_KEYS = {
    weather : (coords : Coordinates) => ["weather" , coords] as const,
    forecast : (coords : Coordinates) => ["forecast",coords] as const,
    location : (coords : Coordinates) => ["location",coords] as const,
    search : (query : string) => ["location-search",query] as const,
} as const;

export function useWeatherQuery( coorodinates : Coordinates | null){
    return useQuery({
        queryKey : WEATHER_KEYS.weather(coorodinates ?? {lat : 0, lon: 0}),
        queryFn : ()=>coorodinates ? weatherAPI.getCurrentWeather(coorodinates) : null,
        enabled : !!coorodinates
        
    })
}

export function useForecastQuery( coorodinates : Coordinates | null){
    return useQuery({
        queryKey : WEATHER_KEYS.forecast(coorodinates ?? {lat : 0, lon: 0}),
        queryFn : ()=>coorodinates ? weatherAPI.getForcast(coorodinates) : null,
        enabled : !!coorodinates
    })
}

export function useReverseGeocodeQuery( coorodinates : Coordinates | null){
    return useQuery({
        queryKey : WEATHER_KEYS.location(coorodinates ?? {lat : 0, lon: 0}),
        queryFn : ()=>coorodinates ? weatherAPI.reverseGeoCode(coorodinates) : null,
        enabled : !!coorodinates
    })
}
export function useLocationSearch( query :string){
    return useQuery({
        queryKey : WEATHER_KEYS.search(query),
        queryFn : ()=>query ? weatherAPI.searchLocation(query) : null,
        enabled : query.length >= 3,
    })
}