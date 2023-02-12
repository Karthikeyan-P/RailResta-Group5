import React, { useEffect, useState } from 'react'
import './Restaurants.css'
function Restaurants() {
    const [restaurants, setRestaurants] = useState([])
    function fetchRestaurants() {
        fetch('http://localhost:3000/restaurants')      // Basically returns an array object
            .then(response => {
                return response.json()
            }).then(
                data => {
                    console.log(JSON.stringify(data))
                    setRestaurants(data)
                }
            )
    }

    useEffect(() => {
        fetchRestaurants()
    }, [])

    return (
        <div className='food-items'>
            {restaurants.map(rest =>
                <div className='item'>
                    <h3>{rest.name}</h3>
                    <img src={rest.image} />
                    <p>{rest.cuisine}</p>
                    <p id="address">{rest.location}</p>
                </div>
            )}
        </div>

    )
}

export default Restaurants