import { verify } from 'jsonwebtoken'

export default function profileHandler (req, res) {

  const { myTokenName } = req.cookies

  if (!myTokenName) {
    return res.status(401).json({ message: 'No token' })
  }

  try {
    const user = verify(myTokenName, 'secret')
    return res.json({ email: user.email, username: user.username })
  } catch {
    return res.status(401).json({ message: 'Unauthorized' })
  }

}