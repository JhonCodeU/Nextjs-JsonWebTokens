import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

function LoginPage () {

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const router = useRouter()

  const handleChange = (e) => {
    const { name, value } = e.target
    setCredentials({ ...credentials, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(credentials)
    const response = await axios.post('/api/auth/login', credentials)

    if (response.status === 200) {
      router.push('/dashboard')
    }
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

export default LoginPage;