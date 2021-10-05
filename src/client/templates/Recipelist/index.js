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

    const updateSearch = (event) => {
      setState({ ...state, searchQuery: event.target.value })
    }

    const pullSearch = () => {
      axios.get(`/api/recipes/${state.page}?searchQuery=${state.searchQuery}`).then(res => {
        setState({ ...state, recipes: res.data })
      })
    }

    if (state.pull) {
        axios.get(`/api/recipes/${state.page}`).then(res => {
            setState({ ...state, recipes: res.data, pull: false })
        })
    }
  
    return (
        <div id="wrapper">
          <nav className="d-flex justify-content-end bg-light">


            <div className="d-flex justify-content-end">
                {/* <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul> */}
                <div className="d-flex form-inline my-2 my-lg-0">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={state.searchQuery} onChange={updateSearch} />
                  <button className="btn btn-outline-success my-2 my-sm-0" onClick={pullSearch}>Search</button>
                </div>
            </div>
          </nav>
        <section className="lb text-muted">
            <div className="container">

                <div className="row grid-style">
                    {state.recipes.map(recipe => <FoodTile key={recipe.id} author={recipe.author} name={recipe.title} posted={recipe.created} id={recipe.id}/>)}
                </div>{/* end row */}
                
                <hr className="invis"/>
            </div>      
        </section>  
    </div>
    )
}