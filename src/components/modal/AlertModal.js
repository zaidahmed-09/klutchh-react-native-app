import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setAlertModal } from '../../../redux/actions/auth';

import { Text, View, StyleSheet, TouchableOpacity, Dimensions, Image, Modal,  } from 'react-native'

import { icons } from "../../../utills/Icons";
import colors from '../../../constants/colors';

const DeviceWidth = Dimensions.get("window").width;

const AlertModal = () => {

    const auth = useSelector((state) => state.auth);

    console.log('====================================');
    console.log("home auth alertModal => ", auth?.alertModal);
    console.log('====================================');

    const dispatch = useDispatch()

    const [modalVisible, setModalVisible] = useState(true);


    return (
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          //setModalVisible(!modalVisible);
        }}
        onBackdropPress={() => {
          //setModalVisible(false);
        }}
        style={{flex: 1, alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%', }} 
      >
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%', }} >
            <TouchableOpacity 
                //onPress={() => {dispatch(setAlertModal(null));}}
                style={styles.modalContainer} >
                <View style={styles.tickmarkContainer} >
                    <Image
                        source={icons.purple_check}
                        style={styles.tickmark}
                    />
                </View>
                <View style={styles.textContainer} >
                    <Text style={styles.title} >{auth?.alertModal?.title}</Text>
                    <Text style={styles.subTitle} >{auth?.alertModal?.subtitle}</Text>
                </View>
            </TouchableOpacity>
            </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
    tickmark: {
        height: 110, 
        width: 110, 
        resizeMode: 'contain',
    },
    tickmarkContainer: {
        height: 140,
        width: 140,
        borderRadius: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EBEBF515',
    },
    modalContainer: {
        //height: 250, 
        width: DeviceWidth-32, 
        borderRadius: 20,
        borderWidth: 2,
        padding: 15,
        paddingVertical: 20,
        borderColor: '#EBEBF515',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.PRIMARY_COLOR,
    },
    textContainer: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 24,
        marginBottom: 6,
        color: colors.NEW_THEME_RED,
        fontFamily: 'Inter-SemiBold',
    },
    subTitle: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Inter-Medium',
    },
})

export default AlertModal