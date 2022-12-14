import React from 'react'
import './navbar.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import LanguageIcon from '@mui/icons-material/LanguageOutlined'
import DarkMode from '@mui/icons-material/DarkModeOutlined'
import FullScreen from '@mui/icons-material/FullscreenExitOutlined'
import Notification from '@mui/icons-material/NotificationsNoneOutlined'
import ChatBubble from '@mui/icons-material/ChatBubbleOutlineOutlined'
import ListOutlined from '@mui/icons-material/ListOutlined'
function Navbar() {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...' />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon />
            English
          </div>
          <div className="item">
            <DarkMode />
          </div>
          <div className="item">
            <FullScreen />
          </div>
          <div className="item">
            <Notification />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubble />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ListOutlined />
          </div>
          <div className="item">
            <img src="https://img.freepik.com/premium-vector/man-profile-cartoon_18591-58482.jpg?w=2000"
              className='avatar' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar