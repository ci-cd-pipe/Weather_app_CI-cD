import { scale, verticalScale } from 'react-native-size-matters';
import { Platform, StyleSheet, Dimensions } from 'react-native';

const IOS = Platform.OS === 'ios';
const ANDROID = Platform.OS === 'android';
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const Colors = {
    backGround: '#181828',
    primary: '#487BFF',
    secondary: '#FFFFFF',
    quaternary: '#80809E',
    lightBlue: "#487BFF",
    gradientButton: ['#F39A7F', '#FA7A53'],
    gray: '#a3b4bf',
}

const GlobalStyles = StyleSheet.create({
    centeredContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTextStyle: {
        fontSize: verticalScale(5),
        fontWeight: "400",
        color: Colors.secondary
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }, headerContainer: {
        height: verticalScale(20)
    }, regularText: {
        fontSize: scale(20),
        color: Colors.secondary
    }, arrowImage: {
        width: scale(30),
        height: scale(30),
        resizeMode: 'contain'
    }, bottomAbsoluted: {
        position: 'absolute',
        bottom: 0,
        marginBottom: verticalScale(15),
    },
})

const textInputTheme = {
    colors: {
        placeholder: Colors.primary, text: Colors.primary, primary: Colors.primary,
        underlineColor: Colors.primary, background: Colors.primary
    }
}

export { Colors, textInputTheme, GlobalStyles, IOS, ANDROID, WIDTH, HEIGHT };