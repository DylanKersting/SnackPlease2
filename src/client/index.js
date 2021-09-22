import './index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { Main } from './templates/Recipelist';

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

  return (<Main/>)
}

ReactDOM.render(<Browser/>, document.getElementById('app'))

