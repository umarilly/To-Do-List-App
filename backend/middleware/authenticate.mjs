
import jwt from 'jsonwebtoken';

const authenticate = (req, res, next) => {

    const token = req.header('Authorization').split(' ')[1];

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = { userId: decoded.userId, email: decoded.email };
            next();
        } catch (error) {
            res.status(401).json({ message : 'Invalid token' });
        }
    } else {
        return res.status(401).json({ message : 'Authorization token not found' });
    }
};

export default authenticate;
