import React, { useState, useContext, useEffect } from 'react';
import PhotoGridCell from './PhotoGridCell';
import { api } from '../api';
import {Context} from '../store/Store'



const PhotoGridRow = (props) => {
    const { index } = props
    const [ r1, setR1 ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)
    const [state, dispatch] = useContext(Context);

    useEffect(() => {
        setIsLoading(true)
        
            api(state.category, (state.page * 3) - index)
              .then((links) => {
                setR1(links)
                setIsLoading(false)
        });
    }, [state, state.category, index, state.page])

    return (
        Array.from(Array(3)).map((_, index) => (
                <PhotoGridCell key={"pgc-"+index} link={r1.length && r1[index]?r1[index]['url']:null} isLoading={isLoading}/>
            ))
        )
}

export default PhotoGridRow;