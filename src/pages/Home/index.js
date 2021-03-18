import React from 'react'
import NavBar from '../../components/NavBar'
import Profile from '../../components/Profile'

function Home({theme, themeToggler}) {
  return (
    <div>
      <NavBar theme={theme} themeToggler={themeToggler} />
      <Profile></Profile>
    </div>
  )
}

export default Home
