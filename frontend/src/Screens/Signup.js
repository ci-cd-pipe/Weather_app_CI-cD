import React from 'react';
import { Alert, View } from 'react-native';
import { HEIGHT } from '../Config/Constants';

import { Container, Header, Input, Button, HeaderArrow, Spinner } from '../Components';
import { validateEmail, validatePassword } from '../Config';
import { SignupEmailPassword } from './utils';

const Signup = ({ navigation }) => {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [loading, setLoading] = React.useState(false)

    const checkAndNavigate = async () => {
        if (!validateEmail(email)) {
            Alert.alert("Please provide a valid email address")
            return;
        }

        if (!validatePassword(password)) {
            Alert.alert("Password must be at least 6 chars long")
            return;
        }
        setLoading(true)

        const result = await SignupEmailPassword(email, password)
        setLoading(false)
        if (result) navigation.navigate("Location")
        else Alert.alert("Error Signing up")
    }

    return (
        <Container>
            <HeaderArrow headerText={'Signup'} />
            <View style={{ marginVertical: HEIGHT * 0.1 }} />
            <Input
                label='Email address'
                value={email}
                onChangeText={(text) => setEmail(text)}
            />

            <View style={{ marginVertical: HEIGHT * 0.005 }} />

            <Input
                label='Password'
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
            />

            <View style={{ marginVertical: HEIGHT * 0.05 }} />

            {loading ?
                <Spinner />
                :
                <Button str='Signup' onPress={() => checkAndNavigate()} />
            }

        </Container>
    )
}

export default Signup;