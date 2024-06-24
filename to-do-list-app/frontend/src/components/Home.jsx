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
                            <Typography style={{ fontSize : 35 , marginBottom : 3}} variant="h3" className='animate__animated animate__fadeInLeft'>
                                Exercise Tracker
                            </Typography>
                            <div>
                                <Typography style={{ fontSize : 17 }} variant="body1" className='animate__animated animate__fadeInLeft'>
                                    This exercise tracker web app lets users log workouts and track fitness progress easily. The homepage has an animated header and brief description, while the right side shows exercise images with animations. Users can add, update, or delete workouts
                                </Typography>
                            </div>
                        </StyledPaper>
                    </div>

                    <div className='second-box' >
                        <StyledPaper elevation={3}>
                            <Typography style={{ fontSize : 33 , marginBottom : 3 }}  variant="h3" className='animate__animated animate__fadeInLeft'>
                                Exercise Dashboard
                            </Typography>
                            <div>
                                <Typography style={{ fontSize : 17 }} variant="body1" className='animate__animated animate__fadeInLeft'>
                                    The exercise dashboard provides a centralized hub for managing workout. Users can view, add, edit, and delete exercises from their routine. The dashboard offers a clear overview of all exercises, including details such as exercise name, description, duration, and date.
                                </Typography>
                            </div>
                        </StyledPaper>
                    </div>

                </div>

                <div className='home-right'>
                    <Grid container justifyContent="center">
                        <Grid item>
                            <div>
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
