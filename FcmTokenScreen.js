import React, {useEffect, useState} from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import messaging from '@react-native-firebase/messaging';
import Clipboard from '@react-native-clipboard/clipboard';
import colors from './src/constants/colors';
import { LocalNotification } from './src/utills/LocalPushController';

const FcmTokenScreen = () => {

    const [fcmToken, setFcmToken] = useState('');
    const [toast, setToast] = useState(false);

    const localNotification = () => {
        LocalNotification()
    }
 
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
        console.log("getToken => ");
        let fcmToken = ''
        //await AsyncStorage.getItem('fcmToken');
        if (!fcmToken) {
            messaging()
                .getToken()
                .then((fcmToken) => {
                console.log('FCM Token -> ', fcmToken);
                setFcmToken(fcmToken)
                //AsyncStorage.setItem('fcmToken', fcmToken);
            });
        }else{
            console.log("fcm already : " + fcmToken);
            setFcmToken(fcmToken)
        }
    }

    const copyText = () => {
        setToast(true)
        Clipboard.setString(fcmToken)
        setTimeout(() => {
            setToast(false)
        }, 1000);
    }

    return (
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}} >

            <View style={{marginHorizontal: 20, alignItems: 'center', justifyContent: 'center' }} >
                <Text style={{color: 'white', fontSize: 24}} >Fcm Token</Text>
                <Text style={{color: 'white', fontSize: 18, marginVertical: 20}} >{fcmToken}</Text>
            </View>

            <TouchableOpacity onPress={() => {localNotification()}}>
                <View style={{alignItems: 'center', justifyContent: 'center', height: 50, width: 220, borderRadius: 10, backgroundColor: colors.NEW_THEME_RED}} >
                    <Text style={{color: 'white', fontSize: 20, color: 'white'}} >Copy FCM Token</Text>
                </View>
            </TouchableOpacity>

            <View style={{height: 100, }} >
                {toast && (
                    <View style={{height: 40, marginTop: 40, width: 140, alignItems: 'center', justifyContent: 'center', borderRadius: 10, backgroundColor: 'gray'}} >
                        <Text style={{color: 'black', fontWeight:'bold'}} >Token Copied!</Text>
                    </View>
                )}
            </View>
        </View>
    )
}

export default FcmTokenScreen