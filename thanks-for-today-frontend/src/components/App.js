import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomePage, InfoPage, CalendarPage, WritePage, TodoPage } from 'pages';

import './App.scss';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/Calendar" component={CalendarPage} />
                <Route exact path="/information" component={InfoPage} />
                <Route exact path="/write" component={WritePage} />
                <Route exact path="/todo" component={TodoPage} />
            </Switch>
        </div>
    );
}

export default App;
