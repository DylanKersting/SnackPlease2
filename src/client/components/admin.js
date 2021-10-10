import React from 'react'
import axios from 'axios/dist/axios'
import { getCookie } from '../../util'


export const Admin = () => {
  const [state, setState] = React.useState({
    pullData: true,
    requests: []
  })
  if (state.pullData) {
    axios.get(`/api/admin/requests`).then(res => {
      setState({ ...state, requests: res.data, pullData: false })
    })
  }

  return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Count</th>
              <th scope="col">Day</th>
            </tr>
          </thead>
          <tbody>
            {state.requests.map((request, ix) =>
              <tr key={ix}> 
                <th scope="row">{request.cnt}</th>
                <td>{request.day}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

  )
} 
  
  