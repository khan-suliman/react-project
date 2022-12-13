import React from 'react'
import './home.css'
import Sidebar from '../../components/sidebar/Sidebar'

function Home() {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        Home Content
      </div>
    </div>
  )
}

export default Home