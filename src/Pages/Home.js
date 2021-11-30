import React from 'react'
import Featured from '../components/Featured/Featured'
import Landing from "../components/Landing/Landing"
import Highlights from "../components/Highlights/Highlights"
import Discounted from "../components/Discounted/Discounted"
import Explore from "../components/Explore/Explore"


const Home = () => {
    return (
        <div>
          <Landing />
          <Highlights />
          <Featured />
          <Discounted />
          <Explore />
        </div>
    )
}

export default Home
