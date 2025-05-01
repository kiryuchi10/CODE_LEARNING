import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [markers, setMarkers] = useState([])
  const [form, setForm] = useState({ name: '', age: '', lat: '', lon: '' })

  useEffect(() => {
    axios.get('http://localhost:5000/missing')
      .then(res => setMarkers(res.data))
      .catch(err => console.error(err))
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    axios.post('http://localhost:5000/report', form)
      .then(() => {
        alert('Reported successfully')
        setMarkers([...markers, form])
      })
      .catch(() => alert('Failed to submit'))
  }

  return (
    <div className="container">
      <h1>Missing Person Tracker</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Age" type="number" onChange={e => setForm({ ...form, age: e.target.value })} />
        <input placeholder="Latitude" type="number" onChange={e => setForm({ ...form, lat: e.target.value })} />
        <input placeholder="Longitude" type="number" onChange={e => setForm({ ...form, lon: e.target.value })} />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {markers.map((m, i) => (
          <li key={i}>
            {m.name} (Age {m.age}) @ ({m.lat}, {m.lon})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
