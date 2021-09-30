import React from 'react'
import axios from 'axios/dist/axios'
import { FoodTile } from './foodTile'
import { useParams } from 'react-router'

export const Main = () => {
    const [state, setState] = React.useState({
        recipes: [],
        pull: true,
        page: useParams().page || 1
    })
    if (state.pull) {
        axios.get(`/api/recipes/${state.page}`).then(res => {
            setState({ ...state, recipes: res.data, pull: false })
        })
    }
    return (
        <div id="wrapper">

        <section className="lb text-muted">
            <div className="container">

                <div className="row grid-style">
                    {state.recipes.map(recipe => <FoodTile author={recipe.author} name={recipe.title} posted={recipe.created} id={recipe.id}/>)}
                </div>{/* end row */}
                
                <hr className="invis"/>
            </div>      
        </section>  
    </div>
    )
}