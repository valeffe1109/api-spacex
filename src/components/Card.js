import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
    root: {
        fontSize: 14,
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
    }
}))

const Card = ({ src, launchYear, success, successLanding, missionName }) => {
    const classes = useStyles();
    return <div className={classes.root}>
        <img src={src} />
        <div>
            <span>{missionName}</span>
            <div>
                <strong>Mission Ids:</strong>
                <ul>
                    <li></li>
                </ul>
            </div>
            <div>
                <p><strong>Launch Year:</strong>{launchYear}</p>
            </div>
            <div>
                <p><strong>Successful Launch:</strong>{success}</p>
            </div>
            <div>
                <p><strong>Successful Landings:</strong>{successLanding}</p>
            </div>
        </div>
    </div>
}

export default Card;