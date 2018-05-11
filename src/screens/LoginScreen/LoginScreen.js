import { Button, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import * as AuthActions from '../../actions/AuthReducer';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

const LoginScreen = ({ navigation, isLoggedIn, dispatch, LoggingIn }) => (
    <View style={styles.container}>
        <Text style={styles.welcome}>
            Screen A
            </Text>
        <Text style={styles.instructions}>
            {isLoggedIn ? 'true' : 'false'}
        </Text>
        <Button
            // onPress={() => navigation.dispatch({ type: 'Login' })}
            onPress={() => { LoggingIn({ pin: 123456 }) }}
            title="Log in"
        />
    </View>
);

LoginScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

LoginScreen.navigationOptions = {
    title: 'Log In',
};

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            ...AuthActions
        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);