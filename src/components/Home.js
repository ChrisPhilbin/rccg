import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <>
            <h3>Home</h3>
            <Link to={"/generate"}>Start generating comments</Link>
        </>
    )
}

export default Home