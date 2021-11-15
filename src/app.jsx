import React from 'react'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import NavBar from './components/nav-bar/nav-bar'
import Footer from './components/footer/footer'
import HomePage from './pages/home-page/home-page'
import SecondaryPage from './pages/secondary-page/secondary-page'
import {NAVBAR_HEIGHT, SECONDARY_PAGE_URL} from './utils/constants'

const App = () => (
    <React.StrictMode>
        <Router>
            <div className='content-wrapper' style={{minHeight: `calc(100vh - ${NAVBAR_HEIGHT + 2}rem)`}}>
                <NavBar />
                <div className='flex' style={{minHeight: `calc(100vh - ${NAVBAR_HEIGHT + 2}rem)`, marginTop: `${NAVBAR_HEIGHT + 2}rem`}}>
                    <div className='page-wrapper'>
                        <Switch>
                            <Route exact path='/' component={HomePage} />
                            <Route exact path={SECONDARY_PAGE_URL} component={SecondaryPage} />
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </div>
        </Router>
    </React.StrictMode>
)

export default App
