import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {Context} from '../store/Store'
import scrollToTop from '../common/scrollToTop'

const useStyles = makeStyles(theme => ({
    mainGrid: {
        padding: theme.spacing(2),
        margin: "auto",
        maxWidth: "20%"
    },
  }));

const NavButtons = () => {
    
    const classes = useStyles();
    const [state, dispatch] = useContext(Context);
    const [ page, setPage ] = useState(state.page)

    const updatePageAdd = () => {
        const pageToSet = page+1
        setPage(pageToSet)
        dispatch({type: 'SET_PAGE', payload: pageToSet});
        scrollToTop()
    };

    const updatePageSubtract = () => {
        let pageToSet = 1
        if (page-1>0) {
            pageToSet = page-1
            
        }
        setPage(pageToSet)
        dispatch({type: 'SET_PAGE', payload: pageToSet});
        scrollToTop()
    };  

    return (
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }} className={classes.mainGrid} >
            <Grid item xs={2} sm={4} md={6}>
                <Button variant="outlined" fullWidth onClick={updatePageSubtract}>Previous</Button>
            </Grid>
            <Grid item xs={2} sm={4} md={6}>
                <Button variant="outlined" fullWidth onClick={updatePageAdd}>Next</Button>
            </Grid>
        </Grid>
    )
}

export default NavButtons;