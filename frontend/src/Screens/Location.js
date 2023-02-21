import React from 'react'
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters';

import { GoogleAutocomplete } from './utils'
import { Container, RegText, Header, Input } from '../Components';
import { Colors } from '../Config';


const Location = ({ navigation }) => {
    const [search, setSearch] = React.useState("")
    const [predictions, setPredictions] = React.useState([])

    React.useEffect(() => {
        if (search.length) getPredictions()
    }, [search])

    const getPredictions = async () => {
        let result = await GoogleAutocomplete(search)
        setPredictions(result.data.predictions)
    }

    const renderItem = ({ item }) => {
        //Navigate the user upon selecting a city from the list
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate("Forecast", { city: item.description })}
                style={styles.container}>
                <RegText str={item.description} />
            </TouchableOpacity>
        )
    }

    return (
        <Container>
            <Header headerText={"Please enter the city name"} textStyle={{ fontSize: scale(35) }} />
            <View style={{ marginVertical: verticalScale(10) }} />
            <Input
                label='City'
                value={search}
                onChangeText={(text) => setSearch(text)}
            />

            <FlatList
                data={predictions}
                keyExtractor={(item, index) => `${index}`}
                renderItem={renderItem}
            />

        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: verticalScale(5),
        padding: verticalScale(5),
        borderRadius: verticalScale(5),
        backgroundColor: Colors.quaternary
    }
})

export default Location;