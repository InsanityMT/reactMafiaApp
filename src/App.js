import React from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from './routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import Global from './components/Global'

const App = () => {
    return (
        <>
            <Global />
            <Switch>
                {routes.map(({ path, Component }, key) => (
                    <Route exact path={path} key={key} component={Component} />
                ))}
            </Switch>
        </>
    )
}

export default App
