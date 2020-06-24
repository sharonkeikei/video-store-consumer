import React from 'react';
import './Home.css';
import ReactPlayer from "react-player"

const Home = () => {
  return (
    <div className="homepage">
      <h2 className='title'>Welcome to our Video Store</h2>
      <div className="center">
      <ReactPlayer
        url="https://youtu.be/OVCxJ1aT24A"
      />
      </div>
    </div>
  )
}

export default Home;