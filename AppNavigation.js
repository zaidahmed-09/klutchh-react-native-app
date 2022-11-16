import React from 'react'

import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";

import { NavigationContainer } from '@react-navigation/native';

import AuthenticationStack from './src/stack/AuthenticationStack';
import DrawerNavigationStack from './src/stack/DrawerNavigationStack';

import { useDispatch, useSelector } from 'react-redux';


const AppNavigation = () => {

    const auth = useSelector((state) => state.auth);

    //console.log("AppNavigation auth => ", auth);
    
    return (
        <NavigationContainer>
              <StatusBar
                barStyle="light-content"
            />

            {!auth?.loggedIn
            ?
            <>
                <AuthenticationStack />
            </>
            :
            <>
                <DrawerNavigationStack />
            </>
            }
        </NavigationContainer>
    )
}

export default AppNavigation

