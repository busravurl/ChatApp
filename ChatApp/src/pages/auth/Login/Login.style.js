import {StyleSheet, Dimensions, Platform} from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    logo: {
        with: Dimensions.get('window').width * 0.9,
        heigth: Dimensions.get('window').height /3,
        resizeMode: 'contain',
        alignSelf: 'center',
        //tintColor: 'white',
    },
    logo_container: {
        flex: 1,
        justifyContent: 'center',
    },
    body_container: {
        flex: 1,
    },
    header: {
        color: colors.yellow,
        margin: 5,
        fontSize: Platform.OS === 'android' ? 120 : 160,
    },
});