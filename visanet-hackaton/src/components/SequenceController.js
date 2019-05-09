import React from 'react';

const SequenceController = ({ sections, actualSection }) => {
  

  const components = [];
  for (let index = 0; index < sections; index++) {
    const getStyle = () => {
        if(index < actualSection) {
            return {
                color: 'red'
            }
        } else if (index === actualSection) {
            return {
                color: 'blue'
            }
        } else {
            return {
                color: 'black'
            }
        }
      };
    components.push(
      <li key={index} style={getStyle()}>
        {index + 1}  
      </li>
    )
  }
  return (
    <ul>{components}</ul>
  )   
};

export default SequenceController;