import React from 'react';
import workingImage from '../../images/workingImage.png';

export default function Blog() {
  return (
    <>
      <img
        src={workingImage}
        alt='working'
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'block',
          marginTop: '80px',
          width: '150px',
          height: 'auto',
        }}
      />
      <h1
        style={{
          textAlign: 'center',
          padding: '10px 25px',
        }}
      >
        En construcción
      </h1>
    </>
  );
}
