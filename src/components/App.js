import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Users from './Users';
import Tasks from './Tasks';
import Posts from './Posts';
const App = () => {

    return (
        <BrowserRouter>
            <Navbar />
            <div className="app__content">
                <Route exact path={'/'} component={Users}></Route>
                <Route exact path={'/tasks'} component={Tasks}></Route>
                <Route exact path={'/posts/:key'} component={Posts}></Route>
            </div>
        </BrowserRouter>
    )

}

export default App;
