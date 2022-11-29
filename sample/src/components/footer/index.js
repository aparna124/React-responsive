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
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

export const Footer = () => {
    return (
       <footer>
        <Box px={{xs: 3, sm: 10}} py={{xs: 5, sm: 10}} bgcolor='#3366FF' color='white'>
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={2}>
                        <img src={cairLogo} style={{ maxWidth: '100%', height: 'auto' }} />
                    </Grid>

                        <Grid tem xs={5}>
                            <Grid container spacing={5}>
                                <Grid item sx={12} sm={4}>
                                    <Box>
                                        <Link href='/' color='inherit'>About</Link>
                                    </Box>
                                    <Box>
                                        <Link href='/' color='inherit'>Blog</Link>
                                    </Box>
                                    <Box>
                                        <Link href='/' color='inherit'>Partners</Link>
                                    </Box>
                                    <Box>
                                        <Link href='/' color='inherit'>FAQ</Link>
                                    </Box>
                                    <Box>
                                        <Link href='/' color='inherit'>Blog</Link>
                                    </Box>
                                </Grid>
                                <Grid item sx={12} sm={4}>
                                    <Box>
                                        <Link href='/' color='inherit'>Docs</Link>
                                    </Box>
                                    <Box>
                                        <Link href='/' color='inherit'>Integrations</Link>
                                    </Box>
                                    <Box>
                                        <Link href='/' color='inherit'>API</Link>
                                    </Box>
                                    <Box>
                                        <Link href='/' color='inherit'>Security</Link>
                                    </Box>
                                    <Box>
                                        <Link href='/' color='inherit'>Research</Link>
                                    </Box>
                                </Grid>
                                <Grid item sx={12} sm={4}>
                                    <Box>
                                        <Link href='/' color='inherit'>Partners</Link>
                                    </Box>
                                    <Box>
                                        <Link href='/' color='inherit'>Privacy Policy</Link>
                                    </Box>
                                    <Box>
                                        <Link href='/' color='inherit'>Terms</Link>
                                    </Box>
                                    <Box>
                                        <Link href='/' color='inherit'>Sitemap</Link>
                                    </Box>
                                    <Box>
                                        <Link href='/' color='inherit'>Contact</Link>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Box py={{xs: 5, sm: 10}} fontSize='0.85vw'>
                                <Grid container spacing={5} >
                                    <Grid item xs={3} color = 'black' >
                                        <Box>
                                            CAIR © 2022 All rights reserved
                                        </Box>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Box>
                                            <Link href='/' color='inherit'>Privacy Policy</Link>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Box>
                                            <Link href='/' color='inherit'>Terms of Service</Link>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Box>
                                            <Link href='/' color='inherit'>Sitemap</Link>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid tem xs={5} >
                            <Box sx={12} sm={4}>
                                <Typography color='black'>Keep up to date with our Newsletter</Typography>
                                <TextField id="filled-basic" label="Enter your e-mail" variant="filled" style={{ width: '420px', borderRadius: '50px' }} />
                                <Button type="submit" style={{ marginLeft: '-170px', marginTop: '1.2%', backgroundColor: '#33FF99', textTransform: 'none', color: 'black', width: '150px', borderRadius: '50px' }}>Subscribe</Button>
                            </Box>
                            <Box py={{xs: 5, sm: 10}}>
                                <img src={Twitter} style={{ padding: '2%' }} />
                                <img src={Linkedin} style={{ padding: '2%' }} />
                                <img src={Instagram} style={{ padding: '2%' }} />
                                <img src={Discord} style={{ padding: '2%' }} />
                            </Box>
                        </Grid>
                        
                    </Grid>
                    
            </Container>
            
         </Box>
       </footer>

    )
}