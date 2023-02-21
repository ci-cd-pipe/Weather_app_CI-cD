import React from 'react'
import { View, ViewStyle } from 'react-native'
import { Colors } from '../Config'


const Container = ({ bigContainerStyle, smallContainerStyle, children }) => {

    return (
        <View style={[{ flex: 1, backgroundColor: Colors.backGround }, bigContainerStyle]}>
            <View style={[{ flex: 1, marginHorizontal: '5.5%' }, smallContainerStyle,]}>
                {children}
            </View>
        </View>
    )
}

export default Container