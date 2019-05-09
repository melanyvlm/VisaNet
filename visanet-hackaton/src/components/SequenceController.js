import React from 'react';

const SequenceController = ({ sections, actualSection }) => {
    const components = [];
    for (let index = 0; index < sections; index++) {
        components.push(
            <li key={index}>
                {index + 1}
                {index < actualSection && '+'}
                {index > actualSection && '--'}
                {index === actualSection && 'aqui'}
            </li>
        )
        
    }
    return (
        <ul>{components}</ul>
    )
    
    
};

export default SequenceController;