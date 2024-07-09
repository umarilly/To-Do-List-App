
import express from 'express';
import authenticate from '../middleware/authenticate.mjs';

const router = express.Router();

router.get('/protected', authenticate, (req, res) => {

  if (req.user) {
    return res.json({ message : 'Protected route accessed', user: req.user });
  } else {
    return res.status(401).json({ message : 'User not authorized' });
  }

});

export default router;
