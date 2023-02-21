import React from 'react'
import { View } from 'react-native'
import { Colors, IOS } from './src/Config/Constants';
import { getStatusBarHeight } from 'react-native-status-bar-height';

//Navigation
import Navigator from './src/Navigation'

export default () => {

  return (
    <View style={{ flex: 1, backgroundColor: Colors.backGround, paddingTop: IOS ? getStatusBarHeight() : 0 }}>
      <Navigator />
    </View>
  )
}