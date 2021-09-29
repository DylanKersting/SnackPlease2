import React from 'react'
import axios from 'axios/dist/axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { getCookie } from '../../util'
import v4 from 'uuid-browser/v4'
import marked from 'marked'

import {
  useHistory
} from "react-router-dom";

export const Create = (params) => {
  const history = useHistory()

  const [state, setState] = React.useState({
    pullData: true,
    markdown: '',
    dialogOpen: false,
    isNew: false,
    userid: getCookie('user')
  })

  const save = () => {
    if (!state.isNew) {
      axios.put('/recipes', state).then((res) => {
        history.push('/')
      })
    } else {
      axios.post('/recipes', state).then(res => {
        history.push('/')
      })
    }
  }

  const updateMarkdown = (event) => {
    setState({ ...state, markdown: event.target.value })
  }

  const updateTitle = (event) => {
    setState({ ...state, currentLog: { ...state.currentLog, title: event.target.value } })
  }
  
  const newLog = () => {
    state.isNew = true
    state.currentLog = emptyLog;
    setState({...state, dialogOpen: true})
  }

  const EditIcon = (props) => {
    return props.admin === 'true'?
      <FontAwesomeIcon 
        onClick={() => setState({...state, dialogOpen: true, currentLog: props.log})}
        icon={faPencilAlt}
        style={styles.pencil}
      /> : <div></div>
  }
  

  const handlePaste = (event) => {
    const items = event.clipboardData.items || []
    console.log(event)

    for (let i = 0; i < items.length; i++) {
        if (!items[i].type.includes('image')) {
          continue
        }
        const blob = items[i].getAsFile()
        let data = new FormData()
        data.append('file', blob, 'image.png')
        data.append('id', state.currentLog.id)
        data.append('token', getCookie('session'))
        axios.put('/api/devlog/image/' + state.currentLog.id, data, {
          headers: {
            'accept': 'application/json',
            'Accept-Language': 'en-US,en;q=0.8',
            'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
          }
        }).then(res => {
          setState({ ...state, currentLog: { ...state.currentLog, markdown: state.currentLog.markdown + `![](${window.location.protocol}//${window.location.host}${res.data})` } }) 
        })
    }
  }

  const goToLog = (log) => {
    history.push('/devlog/' + log.id)
  }

  return (
      <div>
          <input
          value={state.currentLog ? state.currentLog.title : ''}
          onChange={updateTitle}
          />
          <textarea rows={50} cols={70} onPaste={handlePaste}  onChange={updateMarkdown} value={state.currentLog ? state.currentLog.markdown : ''} />
          <button onClick={save} style={styles.button}>
            Post
          </button>
      </div>

  )
} 
  
  