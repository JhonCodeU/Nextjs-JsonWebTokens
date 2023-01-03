import { verify } from 'jsonwebtoken'

export default function profileHandler (req, res) {

  const { myTokenName } = req.cookies


  try {
    const user = verify(myTokenName, 'secret')
    return res.json({ email: user.email, username: user.username })
  } catch {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  return res.json({ user: 'user123' })
}