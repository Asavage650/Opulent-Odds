import React from 'react'
import { DiGithubBadge } from "react-icons/di"
import "../CSS/Footer.css"

function Footer() {
    return (
        <div className='footer'>
            <div className='links'>
                <a href='https://github.com/Cecilj24'>
                    <DiGithubBadge size="5rem" color='gold' />
                </a>
                <a href='https://github.com/Asavage650'>
                    <DiGithubBadge size="5rem" color='pink' />
                </a>
                <a href='https://github.com/Funloverlover'>
                    <DiGithubBadge size="5rem" color='black' />
                </a>
                <a href='https://github.com/EHernandez1213'>
                    <DiGithubBadge size="5rem" />
                </a>



            </div>
        </div>
    )
}

export default Footer