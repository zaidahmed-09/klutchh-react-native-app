import 'react-native-gesture-handler';
import React, {useEffect,useRef} from 'react'
import { StyleSheet, Text, View, Platform, LogBox ,AppState} from "react-native";

import AppNavigation from './AppNavigation';
import { Provider } from "react-redux";
import store from "./src/redux/store";

import { QueryClient, QueryClientProvider } from "react-query";

import messaging from '@react-native-firebase/messaging';

LogBox.ignoreAllLogs(true)

LogBox.ignoreLogs([
    "ViewPropTypes will be removed",
    "ColorPropType will be removed",
    ])
    
const App = () => {

    const queryClient = new QueryClient();

    useEffect(() => {

        if (requestUserPermission()) {
            getToken()
        } else console.log('Not Authorization status:', authStatus);
        
        return () => {
    
        };
    }, []);

    const requestUserPermission = async () => {
        const authStatus = await messaging().requestPermission();
        console.log('Authorization status(authStatus):', authStatus);
        return (
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL
        );
    };

    const getToken = async () => {
        let fcmToken = ''
        //await AsyncStorage.getItem('fcmToken');
        if (!fcmToken) {
            messaging()
                .getToken()
                .then((fcmToken) => {
                console.log('FCM Token -> ', fcmToken);
                //AsyncStorage.setItem('fcmToken', fcmToken);
            });
        }else{
            console.log("fcm already : " + fcmToken);
        }
    }
    
    const appState = useRef(AppState.currentState);
  
    useEffect(() => {
      const subscription = AppState.addEventListener("change", nextAppState => {
        if (
          appState.current.match(/inactive|background/) &&
          nextAppState === "active"
        ) {
          console.log("App has come to the foreground!");
        }
  
        appState.current = nextAppState;
        console.log("AppState", appState.current);
      });
  
      return () => {
        subscription.remove();
      };
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <AppNavigation />
            </Provider>
        </QueryClientProvider>
    )
}

export default App

