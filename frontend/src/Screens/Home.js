import React from 'react';
import { Alert, TouchableOpacity, View } from 'react-native';
import { GlobalStyles, HEIGHT } from '../Config/Constants';
import { SigninEmailPassword } from './utils';

import { Container, RegText, Header, Input, Button } from '../Components';
import { validateEmail, validatePassword } from '../Config';

const Home = ({ navigation }) => {
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

        const result = await SigninEmailPassword(email, password)
        setLoading(false)
        if (result) navigation.navigate("Location")
        else Alert.alert("Error Signing in")
    }

    return (
        <Container>
            <Header headerText={'Login'} />
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

            {!loading &&
                <>
                    <TouchableOpacity
                        style={GlobalStyles.centeredContainer} onPress={() => navigation.navigate("Signup")}>
                        <RegText str={"Don't have an email? SignUp"} />
                    </TouchableOpacity>

                    <View style={{ marginVertical: HEIGHT * 0.01 }} />

                    <TouchableOpacity
                        style={GlobalStyles.centeredContainer} onPress={() => navigation.navigate("Location")}>
                        <RegText str={"Or Skip Login"} style={{ color: 'tomato' }} />
                    </TouchableOpacity>
                </>
            }

            {loading ?
                <Spinner />
                :
                <Button str='Signin' onPress={() => checkAndNavigate()} />
            }


        </Container>
    )
}

export default Home