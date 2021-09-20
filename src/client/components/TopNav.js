import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Nav, Navbar } from 'react-bootstrap'
import { faHome, faHouseUser, faBullseye, faEye, faChartBar, faTools } from '@fortawesome/free-solid-svg-icons'

import {
  useHistory
} from 'react-router-dom'

export const TopNav = () => {
  const history = useHistory()

  const [state, setState] = React.useState({
    nav: ''
  })

  return (
    <div>
      <Navbar className="TopBar">dkersting</Navbar>
    </div>
  )
}
