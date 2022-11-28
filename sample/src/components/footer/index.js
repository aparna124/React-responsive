import React, { useContext, useEffect, useState } from 'react';
import { Typography, Grid, Box, item } from '@mui/material';
import cairLogo from '../../assets/cair logo.png';
import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Twitter from '../../assets/twitter.png';
import Linkedin from '../../assets/linkedin.png';
import Instagram from '../../assets/instagram.png';
import Discord from '../../assets/discord.png';

const theme = createTheme();

theme.typography.h1 = {
    fontSize: '2rem',
    '@media (min-width:600px)': {
      fontSize: '2.8rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '5rem',
    },
  };
  
  theme.typography.h7 = {
      fontSize: '0.75rem',
      '@media (min-width:600px)': {
        fontSize: '1rem',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '1.2rem',
      },
    };

export const Footer = () => {
    return (
        <div>
            <div style={{ backgroundColor: '#3366FF', height: '100%', width: '100%', padding: '5%' }}>
                <Grid container>
                    <Grid item xs={2}>
                        <img src={cairLogo} style={{ maxWidth: '100%', height: 'auto' }} />
                    </Grid>
                    <Grid item xs={5} style={{ color: '#fff' }}>
                        <div>
                            <Grid container>
                                <Grid item xs={4}>
                                    <ThemeProvider theme={theme}>
                                        <Typography variant='h7'>
                                            <Box>About</Box>
                                            <Box>Blog</Box>
                                            <Box>Partners</Box>
                                            <Box>FAQ</Box>
                                            <Box>Blog</Box>
                                        </Typography>
                                    </ThemeProvider>
                                </Grid>
                                <Grid item xs={4}>
                                <ThemeProvider theme={theme}>
                                    <Typography variant='h7'>
                                        <Box>Docs</Box>
                                        <Box>Integrations</Box>
                                        <Box>API</Box>
                                        <Box>Security</Box>
                                        <Box>Research</Box>
                                    </Typography>
                                </ThemeProvider>
                                </Grid>
                                <Grid item xs={4}>
                                <ThemeProvider theme={theme}>
                                    <Typography variant='h7'>
                                        <Box>Partners</Box>
                                        <Box>Privacy Policy</Box>
                                        <Box>Terms</Box>
                                        <Box>Sitemap</Box>
                                        <Box>Contact</Box>
                                    </Typography>
                                </ThemeProvider>
                                </Grid>
                            </Grid>
                        </div>
                        <div style={{ paddingTop: '10%' }}>
                            <Grid container>
                                <Grid item xs={4} style={{ color: 'black', }}>
                                    <Typography style={{ fontSize: '12px', fontWeight: "500" }}>CAIR © 2022 All rights reserved</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography style={{ fontSize: '12px', fontWeight: "500" }}>Privacy Policy</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography style={{ fontSize: '12px', fontWeight: "500" }}>Terms of Service</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography style={{ fontSize: '12px', fontWeight: "500" }}>Sitemap</Typography>
                                </Grid>
                            </Grid>
                        </div>

                    </Grid>
                    <Grid item xs={5}>
                        <div>
                            <Typography>Keep up to date with our Newsletter</Typography>
                            <TextField id="filled-basic" label="Enter your e-mail" variant="filled" style={{ width: '420px', borderRadius: '50px' }} />
                            <Button type="submit" style={{ marginLeft: '-170px', marginTop: '1.2%', backgroundColor: '#33FF99', textTransform: 'none', color: 'black', width: '150px', borderRadius: '50px' }}>Subscribe</Button>
                        </div>
                        <div style={{ paddingTop: '14%'}}>
                         <img src={Twitter} style={{padding: '2%'}}/>
                         <img src={Linkedin} style={{padding: '2%'}}/>
                         <img src={Instagram} style={{padding: '2%'}}/>
                         <img src={Discord} style={{padding: '2%'}}/>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>

    )
}