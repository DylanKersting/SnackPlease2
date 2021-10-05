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
    title: '',
    id: v4(),
    userid: getCookie('user')
  })
  console.log(state.userid)

  const save = () => {
    axios.post('/api/recipes', state).then(res => {
      history.push('/')
    })
  }

  const updateMarkdown = (event) => {
    console.log('Update Markdown: ', event.target.value)
    setState({ ...state, markdown: event.target.value })
  }

  const updateTitle = (event) => {
    setState({ ...state, title: event.target.value })
  }

  const uploadFile = (blob) => {
    let data = new FormData()
    data.append('file', blob, 'image.png')
    data.append('id', state.id)
    data.append('token', state.userid)



    axios.put('/api/recipes/image/', data, {
      headers: {
        'accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.8',
        'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
      }
    }).then(res => {
      setState({ ...state, markdown: state.markdown += `![](${window.location.protocol}//${window.location.host}${res.data})` }) 
    })
  }

  const handlePaste = (event) => {
    const items = event.clipboardData.items || []
    for (let i = 0; i < items.length; i++) {
      if (!items[i].type.includes('image')) {
        continue
      }
      console.log(items[i])
      uploadFile(items[i].getAsFile())
    }
  }

  const handleUpload = (event) => {
    const input = document.getElementById('myFile')
    console.log(input.files)
    uploadFile(document.getElementById('myFile').files[0])
    input.value = null
  }

  return (
      <div>
        <div>
          <input
          value={state.title}
          onChange={updateTitle}
          />
          <button onClick={() => {document.getElementById('myFile').click()}}>Upload Image</button>
        </div>
          <input onChange={handleUpload} type="file" id="myFile" hidden name="filename"/>
          <textarea rows={50} cols={70} onPaste={handlePaste}  onChange={updateMarkdown} value={state.markdown} />
          <button onClick={save}>
            Post
          </button>
      </div>

  )
} 
  
  