
import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import bodyParser from 'body-parser';

import User from '../models/user.model.mjs';

const router = express.Router();
router.use(bodyParser.json());

router.route('/').get(async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.route('/signup').post(async (req, res) => {
    const { username, email, password } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if (!username || !email || !password) {
        return res.status(400).json({ error: 'Username, email, and password are required' });
    }

    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
    }

    if (!passwordRegex.test(password)) {
        return res.status(400).json({ error: 'Invalid Password format' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        await newUser.save();
        res.json({ message: 'User added successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});


router.route('/login').post(async (req, res) => {

    const { username, email, password } = req.body;

    try {

        const user = await User.findOne({ email });

        if (!user ) {
            return res.status(400).json({ error: 'Invalid email' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({ error: 'Invalid password' });
        }

        const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET , {
            expiresIn: '1h',
        });
        
        res.status(200).json({ token, userId: user._id , username: user.username});
        
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;