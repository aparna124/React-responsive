import React, { useContext, useEffect, useState } from 'react';
import { Header } from '../../components/header';
import Squiggle from '../../assets/Squiggle.png';
import SignUpLogo from '../../assets/Sign Up.png';
import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import { Grid, Button, Box, Typography, autocompleteClasses } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import signUpHeader from '../../assets/SignUpHeader.png';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'green',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#33FF99',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#33FF99',
            borderRadius: '50px',
            borderBlockWidth: '2px'
        },
        '&:hover fieldset': {
            borderColor: '#33FF99',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#33FF99',
        },
    },
});

const useStyles = makeStyles((theme) => ({
    textField: {
        width: 900,
        [theme.breakpoints.down("md")]: {
            width: 660,
        },
        [theme.breakpoints.down("sm")]: {
            width: 500,
        },
        [theme.breakpoints.down("xs")]: {
            width: 300,
        },


    },
    // topTextField: {
    //     paddingLeft: 100
    //     // width: 500,
    //     // [theme.breakpoints.down("md")]: {
    //     //     width: 300,
    //     // },
    //     // [theme.breakpoints.down("sm")]: {
    //     //     width: 200,
    //     // },
    //     // [theme.breakpoints.down("xs")]: {
    //     //     width: 100,
    //     // },
    //   }, 
}));

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

export const SignUp = () => {

    const classes = useStyles();
    const [facebook, setFacebook] = useState('');
    const [twitter, setTwitter] = useState('');
    const [ens, setEns] = useState('');
    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
    });

    const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <div style={{ height: '50%', textAlign: 'center' }} >
                <img src={signUpHeader} style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <div style={{ height: '500px', marginTop: '2%' }} >
                <div style={{ textAlign: 'center', paddingLeft: '18%', paddingRight: '18%' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <CssTextField
                                fullWidth
                                id="Name"
                                required
                                label="First Name"
                                name="fname"
                                type="text"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <CssTextField
                                fullWidth
                                id="lastName"
                                required
                                label="Last Name"
                                name="lname"
                                type="text"
                            />
                        </Grid>
                    </Grid>
                </div>
                <div style={{ textAlign: 'center', paddingLeft: '18%', paddingRight: '18%'}}>
                    <Grid container>
                        <Grid item xs={12}>
                            <CssTextField
                                margin="normal"
                                fullWidth
                                required
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <CssTextField
                                margin="normal"
                                fullWidth
                                required
                                id="password"
                                label="Password"
                                name="pass"
                                type={values.showPassword ? "text" : "password"}
                                onChange={handlePasswordChange("password")}
                                value={values.password}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }
                                }
                            />
                            <CssTextField
                                margin="normal"
                                fullWidth
                                name="facebook"
                                label="Facebook Link"
                                type="text"
                                id="Facebook"
                                value={facebook}
                                onChange={(e) => setFacebook(e.target.value)}
                            />
                            <CssTextField
                                margin="normal"
                                fullWidth
                                name="twitter"
                                label="Twitter Link"
                                type="text"
                                id="Twitter"
                                value={twitter}
                                onChange={(e) => setTwitter(e.target.value)}
                            />

                        </Grid>
                    </Grid>
                </div>
                <div style={{ paddingLeft: '18%', paddingRight: '18%', marginTop: '2%'}}>
                    <Grid container>
                        <Grid item xs={4} sx={{display: 'flex', alignItems: 'center', color: '#AAAAAA'}}>
                             <ThemeProvider theme={theme}>
                                <Typography variant='h6'>*Required fields</Typography>
                             </ThemeProvider>
                        </Grid>
                        <Grid item xs={4} sx={{textAlign: 'center'}}>
                            <Button
                                variant="contained"
                                sx={{color: 'black', backgroundColor: '#33FF99', textTransform: 'none', fontSize: '1rem', fontWeight: '400', borderRadius: '2rem', width: '100%'}}
                            >
                                Register
                            </Button>
                        </Grid>
                    </Grid>
                </div>
                <div style={{marginTop: '2%', color: '#AAAAAA', textAlign: 'center', textDecoration: 'underline'}}>
                    <ThemeProvider theme={theme}>
                        <Typography variant='h6'>How do we use this Information?</Typography>
                    </ThemeProvider>
                </div>
           
            <div style={{ height: '300px', textAlign: 'center', paddingLeft: '18%', paddingRight: '18%', marginTop: '2%', color: '#6600FF'}}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <ThemeProvider theme={theme}>
                                <Typography variant="h3">Why CAIR?</Typography>
                            </ThemeProvider>
                        </Grid>
                        <Grid item xs={6}>
                            <ThemeProvider theme={theme}>
                                <Typography variant="h3">Questions?</Typography>
                            </ThemeProvider>
                        </Grid>
                    </Grid>
            </div>
            </div>
        </div>
    )
}

// sx={{ color: 'black', backgroundColor: '#33FF99', fontSize: '20px', fontWeight: '500', borderRadius: '50px', width: '190px', textTransform: "none" }}