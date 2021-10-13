import React from 'react'
import axios from 'axios/dist/axios'
import { getCookie } from '../../util'


export const Admin = () => {
  const [state, setState] = React.useState({
    pullData: true,
    requests: [],
    ips: [],
    recipes: []
  })
  if (state.pullData) {
    Promise.all([axios.get('/api/admin/requests'), axios.get('/api/admin/ips'),  axios.get('/api/admin/topRecipes')]).then(([req, ips, resp]) => {
      setState({ ...state, requests: req.data, ips: ips.data, recipes: resp.data, pullData: false })
    })
  }

  return (
      <div>
        <h1>Raw Requests</h1>
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
        <h1>Unique Ips</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Count</th>
              <th scope="col">Day</th>
            </tr>
          </thead>
          <tbody>
            {state.ips.map((ip, ix) =>
              <tr key={ix}> 
                <th scope="row">{ip.cnt}</th>
                <td>{ip.day}</td>
              </tr>
            )}
          </tbody>
        </table>
        <h1>Top Recipes</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Count</th>
              <th scope="col">Path</th>
              <th scope="col">Name</th>
            </tr>
          </thead>
          <tbody>
            {state.recipes.map((recipe, ix) =>
              <tr key={ix}> 
                <th scope="row">{recipe.cnt}</th>
                <td><a href={recipe.path}>{recipe.path}</a></td>
                <td>{recipe.name}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

  )
} 
  
  