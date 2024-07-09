import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { config } from 'dotenv';

import exerciseRoute from './routes/exercises.mjs';
import usersRoute from './routes/users.mjs';
import authenticate from './middleware/authenticate.mjs';
import protectedRoute from './routes/protectedRoute.mjs';

config();

const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB Database connection is established successfully');
});

app.use(cors());
app.use(express.json());

app.use('/exercises', exerciseRoute);
app.use('/users', usersRoute);
app.use('/api', authenticate);
app.use('/api', protectedRoute);

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
});
