import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Detail from '../pages/Detail';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/repository/:repository+" component={Detail} />
    </Switch>
);

export default Routes;
