import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Home from '../screens/Home/Home';

import { PersistGate } from 'redux-persist/integration/react';

// import GlobalSpinner from '../components/Global/GlobalSpinner';

class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <PersistGate persistor={this.props.persistor}>
                    <React.Fragment>
                        <BrowserRouter>
                            <Home></Home>
                        </BrowserRouter>
                    </React.Fragment>
                </PersistGate>
            </React.Fragment>
        )
    }
}

export default Main;
