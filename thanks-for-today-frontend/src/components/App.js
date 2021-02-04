import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
    HomePage,
    LoginPage,
    SignUpPage,
    CalenderPage,
    WriteDiaryPage,
} from 'pages';

import './App.scss';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/signup" component={SignUpPage} />
                <Route exact path="/calender" component={CalenderPage} />
                <Route exact path="/write" component={WriteDiaryPage} />
            </Switch>
        </div>
    );
}

export default App;
