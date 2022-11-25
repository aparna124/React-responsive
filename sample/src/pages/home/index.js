import React, { useContext, useEffect, useState } from 'react';
import Illustration from '../../assets/Illustration.png';
import Frame from '../../assets/FrameTop.png';
import SquiggleBlue from '../../assets/SquiggleBlue.png';
import FrameBlue1 from '../../assets/FrameBlue1.png';
import { Typography, Grid, Box } from '@material-ui/core';
import WorkText from '../../assets/WorkText.png';
import Step1 from '../../assets/Step 1.png';
import illustration1 from '../../assets/illustration1.png';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import illustration2 from '../../assets/illustration2.png';
import illustration3 from '../../assets/illustration3.png';


const theme = createTheme();

theme.typography.h3 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
      fontSize: '1.8rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.6rem',
    },
  };
  
  theme.typography.h6 = {
      fontSize: '0.75rem',
      '@media (min-width:600px)': {
        fontSize: '1rem',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '1.4rem',
      },
    };

export const Home = () => {

    function over(e) {
        e.currentTarget.src =  FrameBlue1 ;
     }
      function out(e) {
        e.currentTarget.src =  SquiggleBlue ;
      }

    return (
       <div>
            <div style={{ paddingLeft: '10%', paddingRight: '10%'}}>

                <div style={{position: 'relative'}}>
                    <div style={{ height: '100%', textAlign: 'center', position: "absolute" }}>
                        <img src={Illustration} style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>

                    <div style={{ height: '100%', position: "relative" }} >
                        <img src={Frame} style={{ paddingTop: '51%', maxWidth: '100%', height: 'auto', zIndex: 1 }} />
                    </div>
                </div>

                <div id="how it works" style={{height: '100%', paddingTop: '10%'}}>
                    <div id="heading" style={{ position:'absolute'}}>
                        <img src={WorkText} style={{ maxWidth: '100%', height: 'auto' }}/>
                    </div>
                    <div id="create" style={{ position: 'relative', paddingTop: '32%', zIndex: '-1'}}>
                        <div style={{ height: 'auto', maxWidth: 'auto', borderRadius: '3vw', paddingTop: '4%', paddingBottom: '4%', backgroundColor: '#33FF99', display: 'flex', alignItems: 'center'}}>
                            <Grid container spacing={2}>
                                <Grid item xs={6} style={{ paddingLeft: '5rem' }}>
                                        <Typography variant="h3" style={{ fontWeight: '800', fontSize: '4.5vw', lineHeight: '5vw' }} sx={{
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            display: "-webkit-box",
                                            WebkitLineClamp: "2",
                                            WebkitBoxOrient: "vertical",
                                        }}>
                                            Create a
                                            Free Account
                                        </Typography>
                                        <Typography variant="h6" style={{ fontWeight: '600', fontSize: '2.8vw', lineHeight: '3.5vw', color: '#6600FF', paddingTop: '3%' }}>
                                            Use your account to browse artworks and discover artists in the CAIR community.
                                        </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <img src={illustration1} style={{maxWidth: '100%', height: 'auto'}}/>
                                </Grid>
                            </Grid>   
                        </div>
                    </div>
                    
                    <div id="openWallet" style={{ paddingTop: '2%', zIndex: '-1'}}>
                        <div style={{ height: 'auto', maxWidth: 'auto', borderRadius: '3vw', paddingTop: '4%', paddingBottom: '4%', backgroundColor: '#33FF99', display: 'flex', alignItems: 'center'}}>
                            <Grid container spacing={2}>
                                <Grid item xs={6} style={{ paddingLeft: '5rem' }}>
                                        <Typography variant="h3" style={{ fontWeight: '800', fontSize: '4.5vw', lineHeight: '5vw' }} sx={{
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            display: "-webkit-box",
                                            WebkitLineClamp: "2",
                                            WebkitBoxOrient: "vertical",
                                        }}>
                                            Open a Wallet
                                        </Typography>
                                        <Typography variant="h6" style={{ fontWeight: '600', fontSize: '2.8vw', lineHeight: '3.5vw', color: '#6600FF', paddingTop: '3%' }}>
                                            Wallets allow artwork on CAIR to contain a historical record of all of its past activity.
                                        </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <img src={illustration2} style={{maxWidth: '100%', height: 'auto'}}/>
                                </Grid>
                            </Grid>   
                        </div>
                    </div>

                    <div id="collectCurate" style={{ paddingTop: '2%', zIndex: '-1'}}>
                        <div style={{ height: 'auto', maxWidth: 'auto', borderRadius: '3vw', paddingTop: '4%', paddingBottom: '4%', backgroundColor: '#33FF99', display: 'flex', alignItems: 'center'}}>
                            <Grid container spacing={2}>
                                <Grid item xs={6} style={{ paddingLeft: '5rem' }}>
                                        <Typography variant="h3" style={{ fontWeight: '800', fontSize: '4.5vw', lineHeight: '5vw' }} sx={{
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            display: "-webkit-box",
                                            WebkitLineClamp: "2",
                                            WebkitBoxOrient: "vertical",
                                        }}>
                                            Collect, Curate, and Collaborate
                                        </Typography>
                                        <Typography variant="h6" style={{ fontWeight: '600', fontSize: '2.8vw', lineHeight: '3.5vw', color: '#6600FF', paddingTop: '3%' }}>
                                            Artists in the CAIR community will always have control over how their work is bought, sold, or presented.
                                        </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <img src={illustration3} style={{maxWidth: '100%', height: 'auto'}}/>
                                </Grid>
                            </Grid>   
                        </div>
                    </div>
                </div>
                
            </div>
        
       </div> 
    )
}