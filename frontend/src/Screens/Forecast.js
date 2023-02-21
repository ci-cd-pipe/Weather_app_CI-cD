import React from 'react'
import { Alert, Image } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import { scale, verticalScale } from 'react-native-size-matters'
import { SERVER_URL } from '@env'
import axios from 'axios'

import { Container, HeaderArrow, RegText, Spinner } from '../Components';

const Forecast = ({ navigation, route }) => {
    const { city } = route.params
    const [forecastPrediction, setForecastPrediction] = React.useState(null)
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        getCityForecast()
        console.log(city)
    }, [])

    const getCityForecast = async () => {
        setLoading(true)
        //Call the BE with the selected city
        await axios.get(`${SERVER_URL}weather?location=${city}`).then((res) => {

            firestore()
              .collection('Searches')
              .add({
                query: city,
                temp: res.data.temp,
                humidity: res.data.humidity,
                windSpeed: res.data.windSpeed
              })
              .then(() => {
                console.log('query added!');
              });
            setForecastPrediction(res.data)
        }).catch((e) => {
            Alert.alert(JSON.stringify(e))
        })

        setLoading(false)
    }

    return (
        <Container>
            <HeaderArrow headerText={city} textStyle={{ fontSize: scale(30) }} />
            {loading ?
                <Spinner />
                :
                <>
                    {
                        forecastPrediction &&
                        <>
                            <Image
                                style={{ height: '50%', width: '100%', marginVertical: verticalScale(10), borderRadius: verticalScale(10) }}
                                source={{ uri: forecastPrediction.image }}
                            />
                            <RegText str={`The weather is ${forecastPrediction.title} today`} style={{ color: 'tomato' }} />
                            <RegText str={`Temperature: ${forecastPrediction.temp}`} style={{ color: 'tomato' }} />
                            <RegText str={`Humidity: ${forecastPrediction.humidity}`} style={{ color: 'tomato' }} />
                            <RegText str={`Wind Speed: ${forecastPrediction.windSpeed}`} style={{ color: 'tomato' }} />
                        </>
                    }
                </>
            }
        </Container>
    )
}

export default Forecast;
