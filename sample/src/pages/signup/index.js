import React, { useContext, useEffect, useState } from 'react';
import { Header } from '../../components/header';
import Squiggle from '../../assets/Squiggle.png';
import SignUpLogo from '../../assets/Sign Up.png';
import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import { Grid, Button, Box, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'green',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#33FF99',
            borderRadius: '50px',
            borderBlockWidth: '2px'
        },
        '&:hover fieldset': {
            borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'green',
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
    topTextField: {
        width: 410,
        [theme.breakpoints.down("md")]: {
            width: 200,
        },
        [theme.breakpoints.down("sm")]: {
            width: 100,
        },
        [theme.breakpoints.down("xs")]: {
            width: 500,
        },
      },

     image: {
        // width: 450,
        [theme.breakpoints.down("sm")]: {
          width: '30%',
        },
        [theme.breakpoints.down("md")]: {
          width: '35%',
        },
      },

    
  }));

export const SignUp = () => {

    const classes = useStyles();
    const [facebook, setFacebook] = useState('');
    const [twitter, setTwitter] = useState('');
    const [ens, setEns] = useState('');
    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
      });
    

    const squiggleStyle = {
        paddingLeft: '40%',
        marginTop: '2.7%',
        position: "absolute",
        zIndex: '1'
    }

    const signUpStyle = {
        paddingLeft: '25%',
        marginTop: '10%',
        position: "absolute",
        zIndex: '2'
    }

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
                <div style={{ height: '400px' }}>
                    <img src={Squiggle} style={squiggleStyle} className={classes.image}/>
                    <img src={SignUpLogo} style={signUpStyle} className={classes.image}/>
                </div>
                <div style={{ height: '500px', paddingLeft: '270px', paddingRight: '200px'}} >
                <div>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <CssTextField
                            fullwidth
                                id="Name"
                                required
                                label="First Name"
                                type="text"
                                className={classes.topTextField}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <CssTextField
                                fullwidth
                                required
                                id="lastName"
                                label="Last Name"
                                name="email"
                                type="text"
                                className={classes.topTextField}
                            />
                        </Grid>
                    </Grid>
                </div>
                <div>
                    <CssTextField
                        margin="normal"
                        // fullWidth
                        required
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        className={classes.textField}
                    />
                    <CssTextField
                        margin="normal"
                        // fullWidth
                        required
                        id="password"
                        label="Password"
                        name="pass"
                        type={values.showPassword ? "text" : "password"}
                        onChange={handlePasswordChange("password")}
                        value={values.password}
                        className={classes.textField}
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
                        // fullWidth
                        name="facebook"
                        label="Facebook Link"
                        type="text"
                        id="Facebook"
                        value={facebook}
                        onChange={(e) => setFacebook(e.target.value)}
                        className={classes.textField}
                    />

                    <CssTextField
                        margin="normal"
                        // fullWidth
                        name="twitter"
                        label="Twitter Link"
                        type="text"
                        id="Twitter"
                        value={twitter}
                        onChange={(e) => setTwitter(e.target.value)}
                        className={classes.textField}
                    />
                    </div>
                    <div sx={{textaliAlign: "center", width: '900px'}}>
                    <Grid container spacing={3} direction='row' paddingTop={5} >
                        <Grid item xs={4}>
                            *Required fields
                        </Grid>
                        <Grid item xs={4}>
                            <Button
                                sx={{ color: 'black', backgroundColor: '#33FF99', fontSize: '20px', fontWeight: '500', borderRadius: '50px', width: '190px', textTransform: "none"}}
                                variant="contained"
                            >
                                Register
                            </Button>
                        </Grid>
                        <Grid item xs={4}>

                        </Grid>
                    </Grid>
                    </div>
                    <div style={{paddingTop: '40px'}}>
                        <Typography>How do we use this information</Typography>
                    </div>
                </div>
                <div style={{ height: '300px', textAlign: 'center', paddingTop: '150px', fontSize: '50px', fontWeight: '650', color: '#6600FF'}}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <h>Why CAIR?</h>
                        </Grid>
                        <Grid item xs={6}>
                            <h>Questions?</h>
                        </Grid>
                    </Grid>
                </div>
        </div>
    )
}

