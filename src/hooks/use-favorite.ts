import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useLocalStorage } from "./use-local-storage";

interface FavoriteCity{
    id: string;
    lat: number;
    lon: number;
    name: string;
    country: string;
    state?: string;
    addedAt: number;
}
export function useFavorite() {
    const [favorites, setFavorites] = useLocalStorage<FavoriteCity[]>("favorites", []);
    const queryClient = useQueryClient();
    const favoriteQuery = useQuery({
        queryKey: ["favorites"],
        queryFn: () => favorites,
        initialData: favorites,
        staleTime:Infinity
    })

    const addToFavorites = useMutation({
        mutationFn: async (city: Omit<FavoriteCity, "id" | "addedAt">) => {
            const newFav: FavoriteCity = {
                ...city,
                id: `${city.lat}-${city.lon}`,
                addedAt: Date.now(),
            }

            const exits = favorites.some(fav => fav.id === newFav.id);
            if(exits) return favorites;

            const newFavorites = [newFav, ...favorites].slice(0,10);

            setFavorites(newFavorites);
            return newFavorites;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey : ["favorites"]
            })
        }
    })

    const removeFavorite = useMutation({
        mutationFn: async (cityId:string) => {
            const newFav = favorites.filter((fav)=>fav.id !== cityId);

            setFavorites(newFav);
            return newFav
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey : ["favorites"]
            });
        }
    })

    return {
        favorites: favoriteQuery.data ?? [],
        removeFavorite,
        addToFavorites,
        isFavorite: (lat : number , lon : number)=> favorites.some(fav => fav.lat === lat && fav.lon == lon)
    }
}