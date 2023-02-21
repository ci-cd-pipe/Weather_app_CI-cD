import auth from '@react-native-firebase/auth';
import { PLACES_API } from '@env'
import axios from 'axios'

export const SigninEmailPassword = async (email, password) => {
    return await auth().signInWithEmailAndPassword(email, password)
        .then(resp => resp.user)
        .catch(error => null);
}


export const SignupEmailPassword = async (email, password) => {
    return await auth().createUserWithEmailAndPassword(email, password)
        .then(resp => resp.user)
        .catch(error => null);
}


const GoogleAutocompleteURL = 'https://maps.googleapis.com/maps/api/place/autocomplete/json'

export const GoogleAutocomplete = (searchInput, searchType = '(cities)') =>
    axios.get(`${GoogleAutocompleteURL}?input=${searchInput}&types=${searchType}&key=${PLACES_API}`)