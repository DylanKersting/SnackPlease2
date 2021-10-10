import './index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { Main } from './templates/Recipelist';
import { Recipe } from './templates/Recipelist/recipe';
import { Create } from './components/createRecipe';
import { Admin } from './components/admin'
import { useLocation } from 'react-router';


import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

const styles = {
}

const Browser = () => {
  
  const [state, setState] = React.useState({
    searchQuery: ''
  })

  return (
  <div>
      <section id="cta" className="jumbotron text-center">
        <div className="container">
          <span style={{fontSize: '5em', bottom: 0}} className="fancyText">Snack</span>
            <a href="/">
              <img className="logo" src="/images/logo.png"/>
            </a>
          <span style={{fontSize: '5em', bottom: 0}} className="fancyText">Please</span>
        </div>
      </section>

      <header className="header">
      </header>

  <Router>
    <Switch>
      <Route key="admin" path="/ghiowertghdslf"><Admin/></Route>
      <Route key="create" path="/create/:id?"><Create/></Route>
      <Route key="recipe" path="/recipe/:id"><Recipe/></Route>
      <Route key="main" path="/:page?"><Main/> </Route>
    </Switch>
  </Router>


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
  </div>
  )
}

ReactDOM.render(<Browser/>, document.getElementById('app'))





