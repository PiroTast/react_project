import React from 'react';
import classes from './MyInput.module.css';
import PostFilter from '../../PostFilter';

const MyInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className = {classes.myInput} {...props}/>
    );
});

export default MyInput;
