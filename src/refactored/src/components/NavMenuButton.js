import React,  { useContext } from 'react';
import Button from '@material-ui/core/Button';
import {Context} from '../store/Store'
import scrollToTop from '../common/scrollToTop'

const NavMenuButton = (props) => {
    const { category } = props
    const [state, dispatch] = useContext(Context);

    const updateCategory = () => {
        dispatch({type: 'SET_CATEGORY', payload: category});
        dispatch({type: 'SET_PAGE', payload: 1});
        scrollToTop();
    };

    

    return (
            <Button variant={state.category===category?"contained":"text"}  color="inherit" onClick={updateCategory}>
                {category}
            </Button>
    );
};

export default NavMenuButton;