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
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
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