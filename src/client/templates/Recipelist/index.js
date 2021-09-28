import React from 'react'
import { FoodTile } from './foodTile'

export const Main = () => {
    return (
        <div id="wrapper">

        <section className="lb text-muted">
            <div className="container">
                <div className="row grid-style">
                    <FoodTile name="popcorn"/>
                    <FoodTile />
                    <FoodTile />
                    <FoodTile />
                </div>{/* end row */}
                
                <hr className="invis"/>


                <div className="row grid-style">

                    <FoodTile />
                    <FoodTile />
                    <FoodTile />
                    <FoodTile />

                </div>

                <hr className="invis"/>


                <div className="row grid-style">

                    <FoodTile />
                    <FoodTile />
                    <FoodTile />
                    <FoodTile />

                </div>
            </div>      
        </section>  
    </div>
    )
}