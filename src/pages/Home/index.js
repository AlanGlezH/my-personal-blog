import React from 'react';
import NavBar from '../../components/NavBar';
import Profile from '../../components/Profile';

function Home() {
  return (
    <div>
      <NavBar />
      <Profile />
      <div
        style={{
          width: '100%',
          height: '800px',
        }}
      />
    </div>
  );
}

export default Home;
