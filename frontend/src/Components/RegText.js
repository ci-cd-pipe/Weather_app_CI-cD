import React from 'react';
import { Text } from 'react-native';
import { scale } from 'react-native-size-matters';
import { GlobalStyles } from '../Config';


const RegText = ({ str, style, big, bigger, biggest }) => {
    const [size, setSize] = React.useState(scale(20))

    React.useEffect(() => {
        if (big === true) setSize(scale(23))
        if (bigger === true) setSize(scale(26))
        if (biggest === true) setSize(scale(30))
    }, [])

    return (
        <Text style={[GlobalStyles.regularText, { fontSize: size }, style]}>
            {str}
        </Text>
    )
}

export default RegText