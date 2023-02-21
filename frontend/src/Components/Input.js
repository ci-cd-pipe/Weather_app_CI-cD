import React from 'react'
import { TextInput } from 'react-native-paper';
import { Colors } from '../Config'
import { verticalScale } from 'react-native-size-matters';

const textInputTheme = {
    colors: {
        placeholder: Colors.primary, text: Colors.primary, primary: Colors.primary,
        underlineColor: Colors.primary, background: Colors.backGround
    }, roundness: verticalScale(5)
}


const Input = ({ label, value, onChangeText = (text) => { }, secureTextEntry }) => {
    return (
        <TextInput
            secureTextEntry={secureTextEntry || false}
            mode="outlined"
            multiline={false}
            style={{ marginBottom: verticalScale(3.5) }}
            label={label}
            value={value.toString()}
            onChangeText={text => onChangeText(text)}
            theme={textInputTheme}
        />
    )
}

export default Input