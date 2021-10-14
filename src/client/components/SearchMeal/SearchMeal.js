import React from 'react';
import './SearchMeal.css';

export default function SearchMeal() {
    return (
        <div className='search-meal'>
            <h2> Please Enter the Meal title you want to search .... </h2> <br/>
            <input type='search' placeholder='Search meal ...' />
        </div>
    )
}
