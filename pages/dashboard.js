import axios from "axios"
import { useState } from "react"

function Dashboard () {

  const [user, setUser] = useState({
    email: '',
    username: ''
  })

  const getProfile = async () => {
    const response = await axios.get('/api/profile')
    setUser(response.data)
  }

  return (
    <div>
      <h1>dashboard</h1>
      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>

      <button onClick={getProfile}>
        Get profile
      </button>
    </div>
  )
}

export default Dashboard