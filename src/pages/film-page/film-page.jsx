import React, {useContext} from 'react'
import {useQuery} from '@apollo/client'
import {GET_FILM_BY_TITLE} from '../../graphql/queries'
import {useQueryParams} from '../../hooks/hooks'
import {StoreContext} from '../../app'
import {IoArrowBack} from 'react-icons/io5'
import {Link} from 'react-router-dom'

import './film-page.scss'

const cb = 'film-page'

const FilmPage = () => {
    let query = useQueryParams()
    let titleParam = query.get('title')
    const {state} = useContext(StoreContext)

    const {loading, data} = useQuery(GET_FILM_BY_TITLE, {
        variables: {title: titleParam},
    })

    if (loading) {
        return <div className={cb} style={{backgroundColor: state.backgroundColor}} />
    }


    const {title, image, banner, director, producer, yearReleased, description, rtScore} = data?.films[0]
    return (
        <div className={cb} style={{backgroundColor: state.backgroundColor}}>
            <Link className={`${cb}__back`} to='/'>
                <IoArrowBack size={50} color='white' />
            </Link>
            <div className={`${cb}__banner-container`}>
                <img src={banner} alt={`Banner for ${title}`} />
            </div>
            <div className={`${cb}__below-banner`}>
                <div className={`${cb}__poster-container`}>
                    <img src={image} alt={`Poster for ${title}`} />
                </div>
                <div className={`${cb}__text-wrapper`}>
                    <h1 className={`${cb}__title`}>{title}</h1>
                    <h2 className={`${cb}__released`}>{yearReleased}</h2>
                    <div className={`${cb}__description`}>{description}</div>
                    <h2 className={`${cb}__rt-score`}>Rotten Tomatoes: {rtScore}</h2>
                    <h2 className={`${cb}__creator`}>Directed by {director}</h2>
                    <h2 className={`${cb}__creator`}>Produced by {producer}</h2>

                </div>
            </div>
        </div>
    )
}

export default FilmPage
