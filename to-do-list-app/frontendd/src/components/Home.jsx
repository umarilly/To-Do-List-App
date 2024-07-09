import React from 'react';
import { Typography, Paper, Grid } from '@mui/material';
import { styled } from '@mui/system';
import HeaderImage from '../images/header.png';
import '../styles/home.css'

const StyledPaper = styled(Paper)({
    backgroundColor: '#f5f5f5',
    padding: '20px',
    borderRadius: '8px',
    margin: '20px',
});

const Home = () => {
    return (
        <>
            <div className='home'>
                <div className='home-left'>

                    <div>
                        <StyledPaper elevation={3}>
                            <Typography style={{ fontSize: 35, marginBottom: 3 }} variant="h3" className='animate__animated animate__fadeInLeft'>
                                To Do List
                            </Typography>
                            <div>
                                <Typography style={{ fontSize: 17 }} variant="body1" className='animate__animated animate__fadeInLeft'>
                                    This to-do list web app allows users to manage tasks efficiently. The homepage features an animated header and a concise introduction, with a sidebar showcasing task-related images and animations. Users can add, update, or delete tasks, making task management straightforward and intuitive.
                                </Typography>
                            </div>
                        </StyledPaper>
                    </div>

                    <div className='second-box' >
                        <StyledPaper elevation={3}>
                            <Typography style={{ fontSize: 33, marginBottom: 3 }} variant="h3" className='animate__animated animate__fadeInLeft'>
                                Tracker Dashboard
                            </Typography>
                            <div>
                                <Typography style={{ fontSize: 17 }} variant="body1" className='animate__animated animate__fadeInLeft'>
                                    The tracker dashboard offers a centralized hub for managing tasks. Users can view, add, edit, and delete tasks from their to-do list. The dashboard provides a clear overview of all tasks, including details such as task name, description, priority, and due date.
                                </Typography>
                            </div>
                        </StyledPaper>
                    </div>

                </div>

                <div className='home-right'>
                    <Grid container justifyContent="center">
                        <Grid item>
                            <div className='img-parent' >
                                <img className='animate__animated animate__fadeInRight header-image' src={HeaderImage} alt="Exercise" />
                            </div>
                        </Grid>
                    </Grid>
                </div>

            </div>
        </>
    )
}

export default Home;
