import React, {useContext} from 'react'
import {useQuery} from '@apollo/client'
import {GET_ALL_FILMS} from '../../graphql/queries'
import FilmTile from '../../components/film-tile/film-tile'

import './home-page.scss'
import {StoreContext} from '../../app'
import {BACKEND_CODE, FRONTEND_CODE, GITHUB_URL} from '../../utils/constants'

const cb = 'home'

const HomePage = () => {
    const {data} = useQuery(GET_ALL_FILMS)
    const {state} = useContext(StoreContext)

    return (
        <div className={cb} style={{backgroundColor: state.backgroundColor}}>
            <div className={`${cb}__title-wrapper`}>
                <h1 className={`${cb}__heading`}>GhibliQL</h1>
                <h2 className={`${cb}__description`}>A GraphQL-powered catalog by <a href={GITHUB_URL}>Alex Charland</a></h2>
                <h2 className={`${cb}__repos`}><a href={FRONTEND_CODE}>Frontend Code</a><a href={BACKEND_CODE}>Backend Code</a></h2>
            </div>
            <div className={`${cb}__tiles-wrapper`}>
                {data && data.films.map((film, i) => (
                    <FilmTile key={`film-${i}`} {...film} />
                ))}
            </div>
        </div>
    )
}

export default HomePage
