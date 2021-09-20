import React from 'react'

import {
  useHistory
} from 'react-router-dom'

export const Stimulsoft = () => {
  const history = useHistory()

  const [state, setState] = React.useState({
    nav: ''
  })

  return (
      <img className="content" src="/images/Stimulsoft.PNG"></img>
  )
}
