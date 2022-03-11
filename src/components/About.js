import React, { useState } from 'react';


function About(props) {
    const [titel, setTitel] = useState(props.titel);
    return (
    <>
            <h1>{titel}</h1>

            <input type="button" onClick={() => setTitel("changed")} value = "click me" />
        </>
    );
    
}

export default About;