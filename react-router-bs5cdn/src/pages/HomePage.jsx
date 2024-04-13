import React from 'react'
import HomeJumbotron from '../components/HomeJumbotron'
import { ArindamAutoPassword } from 'arindam-auto-password'

const HomePage = () => {
    return (
        <>
            <div className="container-fluid">
                <HomeJumbotron />
                <center>
                    <h3>{ ArindamAutoPassword.strongPassword(16) }</h3>
                </center>
            </div>
        </>
    )
}

export default HomePage