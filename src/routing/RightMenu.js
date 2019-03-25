import React, { Component } from 'react';

// Routing
import { Switch, Route } from "react-router-dom";

// Import Screens(high level components)
import NotFound from '../screens/NotFound';
import HomePage from '../screens/HomePage/HomePage';

class RightMenu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default RightMenu;
