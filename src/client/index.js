
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Landing } from './components/landing'

import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

const styles = {
}

const Browser = () => {
  const [state, setState] = React.useState({
    nav: '',
  })

  return (
    <div>
      <Router>
        <div>
          <Landing/>
        </div>
        <Switch>
        </Switch> 
      </Router>
    </div>
  )
}

ReactDOM.render(<Browser/>, document.getElementById('app'))

