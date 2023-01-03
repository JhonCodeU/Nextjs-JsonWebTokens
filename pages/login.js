import { useState } from "react";
import axios from "axios";

function loginPage () {

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setCredentials({ ...credentials, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(credentials)
    const response = await axios.post('/api/auth/login', credentials)
    console.log(response);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default loginPage;