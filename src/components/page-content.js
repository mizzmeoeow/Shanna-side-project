import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Beginning from './beginning';
import Middle from './middle';
import End from './end';

export default function() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Beginning} />
                <Route exact path="/middle" component={Middle} />
                <Route exact path="/end" component={End} />

            </Switch>
        </div>
    )
}