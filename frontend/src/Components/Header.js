import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { verticalScale } from 'react-native-size-matters';
import { Colors } from '../Config'


const Header = ({ headerStyle, textStyle, headerText }) => {
    return (
        <View style={[styles.headerContainer, headerStyle]}>
            <Text style={[styles.headerTextStyle, textStyle]}>
                {headerText}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: 'transparent'
    }, headerTextStyle: {
        color: Colors.primary,
        fontSize: verticalScale(50),
        fontWeight: 'bold'
    },
})

export default Header;