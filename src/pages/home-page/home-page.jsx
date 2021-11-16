import React, {useContext} from 'react'
import {useQuery} from '@apollo/client'
import {GET_ALL_FILMS} from '../../graphql/queries'
import FilmTile from '../../components/film-tile/film-tile'

import './home-page.scss'
import {StoreContext} from '../../app'

const cb = 'home'

const HomePage = () => {
    const {data} = useQuery(GET_ALL_FILMS)
    const {state} = useContext(StoreContext)

    return (
        <div className={cb} style={{backgroundColor: state.backgroundColor}}>
            <h1 className={`${cb}__heading`}>GhibliQL</h1>
            <div className={`${cb}__tiles-wrapper`}>
                {data && data.films.map((film, i) => (
                    <FilmTile key={`film-${i}`} {...film} />
                ))}
            </div>
        </div>
    )
}

export default HomePage
