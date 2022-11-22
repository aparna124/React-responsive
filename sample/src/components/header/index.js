import React, { useContext, useEffect, useState } from 'react'
import { AppBar, Tab, Tabs, Toolbar, Button, useMediaQuery, useTheme } from '@mui/material'
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    tabsItemStyle: {
        fontWeight: '600',
        fontSize: '25px',
    },
});

const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: '#635ee7',
    },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        color: 'rgba(255, 255, 255, 0.7)',
        '&.Mui-selected': {
            color: '#fff',
        },
        '&.Mui-focusVisible': {
            backgroundColor: 'rgba(100, 95, 228, 0.32)',
        },
    }),
);

export const Header = () => {
    const classes = useStyles();
    const [value, setValue] = useState();


    return (

        <div>
            <AppBar>
                <Toolbar>
                    <div>
                        <StyledTabs
                            sx={{ marginLeft: 'auto' }}
                            value={value}
                            onChange={(e, value) => setValue(value)}>
                            <StyledTab>
                                label="Home"
                                className={classes.tabsItemStyle}
                                component={Link}
                                textColor="white"
                            </StyledTab>
                        </StyledTabs>

                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}