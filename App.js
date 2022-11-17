import 'react-native-gesture-handler';
import React from 'react'

import { StyleSheet, Text, View, Platform, LogBox } from "react-native";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { QueryClient, QueryClientProvider } from "react-query";


import AppNavigation from './AppNavigation';

LogBox.ignoreAllLogs(true)

const App = () => {

    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <AppNavigation />
            </Provider>
        </QueryClientProvider>
    )
}

export default App

