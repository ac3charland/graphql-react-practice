import React from 'react'
import './home-page.scss'

const cb = 'home'

const HomePage = () => {

    return (
        <div className={cb}>
            <h1 className={`${cb}__heading`}>Long home page!</h1>
            <p>(Footer is below the fold)</p>
        </div>
    )
}

export default HomePage
