import React, {useReducer} from 'react'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import FilmPage from './pages/film-page/film-page'
import HomePage from './pages/home-page/home-page'
import SecondaryPage from './pages/secondary-page/secondary-page'
import {SECONDARY_PAGE_URL} from './utils/constants'

export const StoreContext = React.createContext()

function reducer(state, action) {
    switch (action.type) {
        case 'set':
            return {
                ...state,
                backgroundColor: action.payload,
            }
        default:
            throw new Error()
    }
}

const initialState = {
    backgroundColor: '#444',
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <React.StrictMode>
            <StoreContext.Provider value={{state, dispatch}}>
                <Router>
                    <div className='page-wrapper'>
                        <Switch>
                            <Route exact path='/' component={HomePage} />
                            <Route path='/film' component={FilmPage} />
                            <Route exact path={SECONDARY_PAGE_URL} component={SecondaryPage} />
                        </Switch>
                    </div>
                </Router>
            </StoreContext.Provider>
        </React.StrictMode>
    )
}

export default App
