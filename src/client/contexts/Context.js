import React, {createContext, useEffect, useState} from 'react';
export const myContext = createContext();



// export const AppContext = ({children}) => {
//     const [meals, setMeals] = useState([]);
//     const [reviews, setReviews] = useState([]);
//     const [categories, setCategories] = useState([]);

//     const fetchHomePageMeals = useEffect(()=> {
//         fetch('/api/meals').then((response) => response.json()).then((data)=> setMeals(data));

//     fetch('/api/reviews').then((response) => response.json()).then((data)=> setReviews(data));
//     });
//     return(
//         <myContext.Provider value={{fetchHomePageMeals}}>
//             {children}
//         </myContext.Provider>
//     )

// }


