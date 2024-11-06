import { useState } from 'react'

import './App.css'
import data from './data'

function App() {
  const [search, setSearch] = useState('') // Initialize search state with an empty string

  return (
    <>
      <div className="container">
        <h3>Filter Table Data</h3>
        <form action="">
          <input type="text" placeholder='Search Text' onChange={(e) => setSearch(e.target.value.toLowerCase())} />
        </form>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((item) => {
                return search === '' ? true : 
                  item.first_name.toLowerCase().includes(search.toLowerCase()) ||
                  item.last_name.toLowerCase().includes(search.toLowerCase) ||
                  item.email.toLowerCase().includes(search.toLowerCase) ||
                  item.phone.includes(search)
              })
              .map((item, index) => (
                <tr key={index}>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App