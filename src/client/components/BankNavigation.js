import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Nav, Navbar } from 'react-bootstrap'
import { faHome, faHouseUser, faBullseye, faEye, faChartBar, faTools, faCalendar } from '@fortawesome/free-solid-svg-icons'

import {
  useHistory
} from 'react-router-dom'

const buttons = [
  {
    name: 'Home',
    route: 'stimulsoft',
    icon: faHome,
    params: {}
  },
  {
    name: 'Profiles',
    route: '',
    icon: faHouseUser,
    params: {}
  },
  {
    name: 'Triggers',
    route: '',
    icon: faBullseye,
    params: {}
  },
  {
    name: 'Predictors',
    route: '',
    icon: faEye,
    params: {}
  },
  {
    name: 'Reports',
    route: '',
    icon: faChartBar,
    params: {}
  },
  {
    name: 'System',
    route: 'triggers',
    icon: faTools,
    params: {}
  },
  {
    name: 'Schedules',
    route: 'schedules',
    icon: faCalendar,
    params: {}
  }
]

export const BankNavigation = () => {
  const history = useHistory()

  const [state, setState] = React.useState({
    nav: ''
  })

  const route = (route) => {
    history.push(`/${route}`)
  }

  return (
    <Nav className="SideBar">
      {buttons.map(button => 
        <Nav.Item key={button.name} onClick={() => route(button.route)}>
          <FontAwesomeIcon className="icon" icon={button.icon} />
        </Nav.Item>
      )}
    </Nav>
  )
}
