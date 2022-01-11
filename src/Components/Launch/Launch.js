import React from 'react';

import './Launch.css'

const Launch = (props) => {
    const {mission_name, launch_year, mission_patch_small} = props
    return (

        <div className={'launch'}>
            <div>
                <h1>{mission_name}</h1>
                <p>{launch_year} </p>
            </div>
            <div>
                <img src={mission_patch_small} alt={mission_name}/>
            </div>
        </div>
    );
};

export default Launch;