import React, {useContext} from 'react';
import { myContext } from "../../contexts/Context";


export default function DisplayMeals() {
    const context = useContext(myContext);
    const meals = context.meals;
    console.log(meals);
    return (
        <div>
            {context.isLoading && <p>Loading...</p>}
            {!meals && <p>Problem loading meals</p>}
            {meals && meals.length <= 0 ? (
                <p>No meals found</p>
            ): (
                <ul>
                {(
                    meals && meals.map((aMeal)=> {
                        
                        <div key={aMeal.id}>
                        <li >{aMeal.title}</li>
                        console.log('ameal', aMeal.title);
                        <li>{aMeal.description}</li>
                        </div>
                        
                    
                    })
                )}
                {context.isError && <h3>Please reload the page ...</h3>}
                </ul>
            )}
        </div>
    )
}

