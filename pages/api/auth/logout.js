import { verify } from "jsonwebtoken"
import { serialize } from "cookie"

export default function logoutHandler (req, res) {
  const { myTokenName } = req.cookies

  if (!myTokenName) {
    return res.status(401).json({ message: 'No token' })
  }

  try {
    verify(myTokenName, 'secret')

    const serialized = serialize('myTokenName', null, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'development',
      sameSite: 'strict',
      maxAge: 0,
      path: '/'
    })

    res.setHeader('Set-Cookie', serialized)
    return res.status(200).json({ message: 'Logout successfully' })

  } catch {
    return res.status(401).json({ message: 'invalid token' })
  }

}