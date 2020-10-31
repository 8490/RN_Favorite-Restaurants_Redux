export function reducer(state, action){
    switch(action.type){
        case "ADD_TO_FAVORITE":
            return {
                ...state,
                favoriteList: [...state.favoriteList, action.payload.selectedRestaurant]
            }


            // const newList = [ ...state.favoriteList];
            // newList.push(action.payload.selectedRestaurant);

            // const newList = [...state.favoriteList, action.payload.selectedRestaurant]
            // state.favoriteList = newList;
            // return { ...state } 
            

        default:
            return state;
    }
} 