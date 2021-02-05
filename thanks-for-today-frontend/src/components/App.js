import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomePage, InfoPage } from 'pages';

import './App.scss';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/information" component={InfoPage} />
            </Switch>
        </div>
    );
}

export default App;
