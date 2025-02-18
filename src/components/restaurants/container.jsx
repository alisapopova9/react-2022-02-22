import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Restaurants } from "./component"
import { loadRestaurants } from '../../modules/restaurants/effects/load-restaurants'
import { selectRestaurants, selectIsRestaurantsLoading, selectIsRestaurantsFailed } from '../../modules/restaurants/selectors'

export const RestaurantsConatainer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadRestaurants());
    }, []);

    const restaurants = useSelector(selectRestaurants);
    const isLoading = useSelector(selectIsRestaurantsLoading);
    const isFailed = useSelector(selectIsRestaurantsFailed);

    if (isLoading) {
        return <div>Loading.....</div>
    }

    if (isFailed) {
        return <div>Refresh later</div>
    }

    if (!restaurants?.length) {
        return null;
    }


    return <Restaurants restaurants={restaurants} />
}