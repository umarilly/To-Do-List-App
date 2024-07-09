
import express from 'express';
import bodyParser from 'body-parser';
import Exercise from '../models/exercise.model.mjs';

const router = express.Router();
router.use(bodyParser.json());

router.route('/add').post((req,res) => {

    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
    const userId = req.body.userId;

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
        userId
    });

    newExercise.save()
    .then(() => res.json('Exercise Added'))
    .catch(err => res.status(400).json('Error : ' + err));

});

// Update Exercise on the basic of User ID - Logged in User Only
router.route('/update/:id').post((req,res) => {
    Exercise.findById(req.params.id)
    .then(exercises => {

        exercises.username = req.body.username;
        exercises.description = req.body.description;
        exercises.duration = Number(req.body.duration);
        exercises.date = Date.parse(req.body.date);

        exercises.save()
        .then(() => res.json('Exercise Updated'))
        .catch(err => res.status(400).json('Error : ' + err));
    })
    .catch(err => res.status(400).json('Error : ' + err))
});

// Display Exercise of all users
// router.route('/').get((req,res) => {
//     Exercise.find()
//     .then(exercises => res.json(exercises))
//     .catch(err => res.status(400).json('Error : ' + err));
// });

// Display Exercise on the basic of UserID - Logged in User Only
router.route('/:userId').get((req, res) => {
    Exercise.find({ userId: req.params.userId })
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error : ' + err));
});

// Delete Exercise on the basic of Exercise ID
router.route('/:id').delete((req,res) => {
    Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise Deleted'))
    .catch(err => res.status(400).json('Error : ' + err));
});




export default router;