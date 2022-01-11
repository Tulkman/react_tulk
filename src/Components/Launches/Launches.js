import React, {useEffect, useState} from 'react';

import Launch from "../Launch/Launch";


const Launches = () => {
    const [launches, setLaunches] = useState([])

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(item => item.json())
            .then(item => setLaunches(item.filter(item => item.launch_year !== '2020')))
    }, [])

    return (

        <div>

            {launches.map(item => <Launch key={item.flight_number} flight_number={item.flight_number} mission_name={item.mission_name}
                                           launch_year={item.launch_year}
                                           mission_patch_small={item.links.mission_patch_small}/>
            )}

        </div>
    );

};

export default Launches;