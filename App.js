import 'react-native-gesture-handler';
import React from 'react'

import { StyleSheet, Text, View, Platform } from "react-native";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { QueryClient, QueryClientProvider } from "react-query";


import AppNavigation from './AppNavigation';


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

