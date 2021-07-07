import React from 'react'
import v4 from 'uuid-browser/v4'
import {
  useHistory
} from "react-router-dom";
import marked from 'marked'

const styles = {
}

const emptyLog = {
  markdown: '',
  title: '',
  id: v4()
}

export const Landing = () => {
  const history = useHistory()

  const [state, setState] = React.useState({
  })

  return (
    <div>
      Snack Please
    </div>
  )
} 
