import React from 'react';
import './sequenceController.css';

const SequenceController = ({ sections, actualSection }) => {

  const components = [];
  for (let index = 0; index < sections; index++) {
    const getStyle = () => {
      if (index < actualSection) {
        return {
          backgroundColor: '#CF387A'
        }
      } else if (index === actualSection) {
        return {
          backgroundColor: '#CF387A'
        }
      } else {
        return {
          backgroundColor: '#d9d9d9'
        }
      }
    };
    const getContent = () => {
      if (index < actualSection) {
        return 'check'
      } else {
        return index + 1
      }
    };
    components.push(
      <li key={index} style={getStyle()} className="list mr-5">
        {getContent()}
      </li>
    )
  }
  return (
    <ul className="list-group list-group-horizontal">{components}</ul>
  )
};

export default SequenceController;