import React from 'react';
import { Text, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { verticalScale } from 'react-native-size-matters';
import { GlobalStyles, Colors } from '../Config';
import { useNavigation } from '@react-navigation/native';

const leftArrow = require('./leftArrow.png')

const HeaderArrow = ({ headerText, headerStyle, textStyle, imageName }) => {
    const navigation = useNavigation();

    const navigateMeBack = () => navigation.goBack()

    return (
        <View
            style={[styles.HeaderContainer, headerStyle]}>
            <TouchableOpacity onPress={() => navigateMeBack()}>
                <Image source={imageName || leftArrow} style={GlobalStyles.arrowImage} />
            </TouchableOpacity >
            <Text style={[styles.TextStyle, textStyle]}>
                {headerText}
            </Text>
            <View />
        </View>
    )
}

const styles = StyleSheet.create({
    HeaderContainer: {
        marginTop: verticalScale(3),
        backgroundColor: 'transparent',
        ...GlobalStyles.rowBetween
    },
    TextStyle: {
        color: Colors.primary,
        fontSize: verticalScale(50),
        fontWeight: 'bold'
    }
})

export default HeaderArrow;