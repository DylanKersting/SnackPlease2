
import './index.scss'
import React from 'react'
import ReactDOM from 'react-dom'


import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

const styles = {
}

const Browser = () => {
  const [state, setState] = React.useState({
    nav: '',
  })

  return (
    <div className="fill">
      <Router>
        <TopNav />
        <div className="content">
          <Switch>
            <Route key={'main'} path={`/`}><Template/></Route>
          </Switch> 
        </div>
      </Router>
    </div>
  )
}

ReactDOM.render(<Browser/>, document.getElementById('app'))

