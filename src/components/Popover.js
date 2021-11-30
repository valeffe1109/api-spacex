import React, { useEffect } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
    overlay:{
        position:'absolute',
        left:0,
        right:0,
        bottom:0,
        top:0,
        backgroundColor:"rgb(0,0,0,0.5)"
    },
    body:{
       width:500,
       height:500,
       position:'fixed',
       backgroundColor:"white",
       borderRadius:16,
       left:"50%",
       top:'50%',
       padding:[16,32],
       transform:'translate(-50%,-50%)'
    }
}))



const Popover = ({children,onClose}) => {
    const classes = useStyles();

    useEffect(()=>{
        console.log('ciao sono appena stato montato');
        return()=> console.log('ciao sono stato smontato')
     },[])

    return <>
        <div className={classes.overlay} onClick={onClose}/>
        <div className={classes.body}>
            {children}
        </div>
    </>
}

export default Popover;