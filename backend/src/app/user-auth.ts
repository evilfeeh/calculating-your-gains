import { sign, verify } from 'jsonwebtoken';
//add user database
//add logger
export default class UserAuth {
  async auth (req: any, res: any) {
    const user = req.body;
    
    if ( user.id === null || user.email === null ) {
      res.status(400).send('ID or EMAIL missing')
    }

    try {
      const token = sign(user, process.env.JWT_SECRET, { expiresIn: '1 min' })
      res.json({ token })
    } catch (error) {
      res.status(500).send('Internal error server')
    }
  }

  async validate (req: any, res: any, next: any) {
    const bearerToken = req.headers['authorization']

    if (!bearerToken) {
      res.status(401).send('Missing Token');
    }

    try {
      const token = bearerToken.split(' ')[1];
      const isValid = verify(token, process.env.JWT_SECRET);
      req.user = isValid
    } catch (error) {
      res.status(401).send('Expired Token')
    }

    next();
  }
}