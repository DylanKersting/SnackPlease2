import React from 'react'
import { FoodTile } from './foodTile'

export const Main = () => {
    return (
        <div id="wrapper">
        <section id="cta" className="jumbotron text-center">
            <div className="container">
            </div>
        </section>

        <header className="header">
            <div className="container">
                <nav className="navbar navbar-inverse navbar-toggleable-md">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#RecipeListmenu" aria-controls="RecipeListmenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-md-center" id="RecipeListmenu">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="food-index.html">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="food-category.html">Recipes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="food-contact.html">Contact Me</a>
                            </li>  
                        </ul>
                    </div>
                </nav>
            </div>
        </header>

        <section className="section lb text-muted">
            <div className="container">
                <div className="row grid-style">
                    <FoodTile name="popcorn"/>
                    <FoodTile />
                    <FoodTile />
                    <FoodTile />
                </div>{/* end row */}
                
                <hr className="invis"/>

{/* Put ad here*/}

                <hr className="invis3"/>

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

        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="widget">
                            <div className="footer-text text-center">
                                <a href="food-index.html"><img src="images/version/food-logo.png" alt="" className="img-fluid"/></a>
                                <p>© 2021 SnackPlease.com</p>
                                <div className="social">
                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i className="fa fa-facebook"></i></a>              
                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Twitter"><i className="fa fa-twitter"></i></a>
                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Instagram"><i className="fa fa-instagram"></i></a>
                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Pinterest"><i className="fa fa-pinterest"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <div className="dmtop">Scroll to Top</div>
        
    </div>
    )
}