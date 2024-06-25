import React, {useState, useEffect, useContext} from 'react'
import FastAverageColor from 'fast-average-color'

import './film-tile.scss'
import {StoreContext} from '../../app'
import {Link} from 'react-router-dom'

const cb = 'film-tile'

const FilmTile = ({title, director, image, yearReleased}) => {
    const [color, setColor] = useState('#444')
    const {dispatch} = useContext(StoreContext)

    useEffect(() => {
        const fac = new FastAverageColor()
        fac.getColorAsync(image)
            .then(color => {
                setColor(color.hex)
            })
    }, [image, setColor])

    const onMouseEnter = () => {
        dispatch({type: 'set', payload: color})
    }

    return (
        <Link to={`/film?title=${title}`} className={cb} onMouseEnter={onMouseEnter}>
            <img className={`${cb}__poster`} src={image} alt={`Poster for ${title}`} />
            <div className={`${cb}__text-wrapper`}>
                <h2>{title} ({yearReleased})</h2>
                <h3>Dir. {director}</h3>
            </div>
        </Link>
    )
}

export default FilmTile
