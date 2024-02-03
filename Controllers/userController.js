const User = require('../Models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const post_register = async (req, res)=>{
    try {
        const { username, password } = req.body;

        console.log('Received request with body:', req.body);

        // Check if password is provided and is a non-empty string
        if (!password || typeof password !== 'string' || password.trim() === '') {
            return res.status(400).json({ error: 'Invalid password' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Registration failed:', error);
        res.status(500).json({ error: 'Registration failed' });
    }
}

const get_register = async (req, res)=>{
    res.render('register');
}

const login = async (req , res) =>{
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ error: 'Authentication failed' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Authentication failed' });
        }
        const token = jwt.sign({ userId: user._id }, 'your-secret-key', {
        expiresIn: '1h',
        });
        res.status(200).json({ token });
        } catch (error) {
            res.status(500).json({ error: 'Login failed' });
        }
}

module.exports = {
    post_register,
    login,
    get_register
}
