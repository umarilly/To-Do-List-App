import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../styles/dashboard.css';
import { TextField, Button, Grid, Box, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom'; 

const Dashboard = () => {

    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState('');

    const [exercises, setExercises] = useState([]);
    const [editExerciseId, setEditExerciseId] = useState(null);

    const [errorMessage, setErrorMessage] = useState('');

    const userId = localStorage.getItem('userId');

    const navigate = useNavigate()

    useEffect(() => {
        readExercises();
    }, [editExerciseId]);

    const readExercises = () => {
        axios.get(`http://localhost:5000/exercises/${userId}`)
            .then(response => {
                setExercises(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const createExercise = (exercise) => {
        axios.post('http://localhost:5000/exercises/add', exercise)
            .then(res => {
                console.log(res.data);
                readExercises();
            })
            .catch(err => {
                console.log(err);
            });
    };

    const updateExercise = (exercise) => {
        axios.post(`http://localhost:5000/exercises/update/${editExerciseId}`, exercise)
            .then(res => {
                console.log(res.data);
                readExercises();
            })
            .catch(err => {
                console.log(err);
            });
    };

    const deleteExercise = (id) => {
        axios.delete(`http://localhost:5000/exercises/${id}`)
            .then(res => {
                console.log(res.data);
                readExercises();
            })
            .catch(err => {
                console.log(err);
            });
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!username || !description || !duration || !date) {
            setErrorMessage('Please fill all the fields');
            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
            return;
        }

        const exercise = {
            username: username,
            description: description,
            duration: Number(duration),
            date: date,
            userId: userId,
        };

        if (editExerciseId) {
            updateExercise(exercise);
        } else {
            createExercise(exercise);
        }

        setUsername('');
        setDescription('');
        setDuration(0);
        setDate('');
        setEditExerciseId(null);
    };

    const handleEdit = (id, exercise) => {
        setEditExerciseId(id);
        setUsername(exercise.username);
        setDescription(exercise.description);
        setDuration(exercise.duration);
        setDate(exercise.date);
    };

    const handleDelete = (id) => {
        deleteExercise(id);
    };

    const navigateToLogin = () => {
        navigate('/login')
    }

    if (!userId) {
        return <div style={{ display: 'flex' , justifyContent : 'center' , alignItems : 'center' , marginTop : '50px' }} >
                    <div>
                        <button onClick={navigateToLogin} className='btn btn-danger' > Please Login </button>
                    </div>
                </div>;
    }

    return (
        <>

            <div className='dashboard-heading' >
                <h2>Exercise Dashboard</h2>
            </div>

            <div className='dashboard-from-and-results' >

                <div className='dashboard-form' >
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    label="Exercise Name"
                                    variant="outlined"
                                    fullWidth
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Description"
                                    variant="outlined"
                                    fullWidth
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Duration"
                                    variant="outlined"
                                    type="number"
                                    fullWidth
                                    value={duration}
                                    onChange={(e) => setDuration(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Date"
                                    variant="outlined"
                                    type="date"
                                    fullWidth
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    InputProps={{
                                        placeholder: '',
                                    }}
                                />

                            </Grid>
                            <Grid item xs={12} >
                                {errorMessage && (
                                    <Typography variant="body2" style={{ color: 'red' }}>{errorMessage}</Typography>
                                )}
                            </Grid>
                            <Grid item xs={12}>
                                <div className='dashboard-submit-button' >
                                    <Button type="submit" variant="contained" color="primary">
                                        Add Exercise
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </form>
                </div>

                <div className='dashboard-results' >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <List sx={{ borderRadius: 8 }}>
                                {exercises.map(exercise => (
                                    <ListItem key={exercise._id} sx={{ border: '1px solid #ccc', borderRadius: 4, marginBottom: 2 }}>
                                        <ListItemText
                                            primary={
                                                <>
                                                    <Typography variant="h6" component="div"><strong>{exercise.username}</strong></Typography>
                                                    <Typography variant="body1" component="div">{` - `} {exercise.description}</Typography>
                                                    <Typography variant="body1" component="div"> {` - Duration: `} {exercise.duration}</Typography>
                                                    <Typography variant="body1" component="div">{` - Date:`} {exercise.date.substring(0, 10)}</Typography>
                                                </>
                                            }
                                            primaryTypographyProps={{ sx: { width: '90%' } }}
                                        />

                                        <ListItemSecondaryAction>
                                            <Box display="flex" flexDirection="column" alignItems="center">
                                                <IconButton aria-label="edit" onClick={() => handleEdit(exercise._id, exercise)}>
                                                    <EditIcon fontSize="large" />
                                                </IconButton>
                                                <IconButton aria-label="delete" onClick={() => handleDelete(exercise._id)}>
                                                    <DeleteIcon fontSize="large" />
                                                </IconButton>
                                            </Box>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                    </Grid>
                </div>

            </div>

        </>
    );
};

export default Dashboard;