import jwt from 'jsonwebtoken'
import { serialize } from 'cookie';

export default function loginHandler (req, res) {

  const { email, password } = req.body

  // check if email and password are valid
  // if email exists in database
  // if password is correct

  if (email === 'admin@example.com' && password === 'admin') {
    // Generate a token
    const token = jwt.sign({
      exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 30),
      email: 'admin@example.com',
      username: 'johnCode'
    }, 'secret');

    const serialized = serialize('myTokenName', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'development',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 30,
      path: '/'
    })

    res.setHeader('Set-Cookie', serialized)
    return res.status(200).json({ message: 'Login successfully' })
  }

  return res.status(401).json({ message: 'Invalid credentials' })
}