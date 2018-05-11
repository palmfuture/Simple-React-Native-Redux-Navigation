import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { addListener } from '../utils/redux';

import { HomeScreen, LoginScreen } from '../screens';

export const AppNavigator = createStackNavigator({
    Login: {
        screen: LoginScreen
    },
    Home: {
        screen: HomeScreen
    }
});

class AppWithNavigationState extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        nav: PropTypes.object.isRequired,
    };

    render() {
        const { dispatch, nav } = this.props;
        return (
            <AppNavigator
                navigation={{
                    dispatch,
                    state: nav,
                    addListener,
                }}
            />
        );
    }
}

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);