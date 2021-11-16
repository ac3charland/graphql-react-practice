import {gql} from '@apollo/client'

export const GET_ALL_FILMS = gql`
query GetFilms {
  films(sort: "year") {
    title
    director
    yearReleased
    image
  }
}
`

export const GET_FILM_BY_TITLE = gql`
query GetFilm($title: String!) {
  films(find: {title: $title}) {
    title
    director
    yearReleased
    image
    banner
    description
    producer
    runningTime
    rtScore
  }
}
`
