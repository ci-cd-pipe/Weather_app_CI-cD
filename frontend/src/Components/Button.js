import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { scale } from 'react-native-size-matters';

import { GlobalStyles, Colors } from '../Config';
import RegText from './RegText';

const BottomButton = ({ str, onPress, buttonStyle, textStyle = { textAlign: 'center' } }) => {
    return (
        <TouchableOpacity onPress={() => onPress()}
            style={[styles.container, buttonStyle]}>
            <RegText str={str}
                style={[{ textAlign: 'center' }, textStyle]}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        ...GlobalStyles.bottomAbsoluted,
        width: '100%',
        padding: scale(10),
        borderRadius: scale(10)
    }

})

export default BottomButton;