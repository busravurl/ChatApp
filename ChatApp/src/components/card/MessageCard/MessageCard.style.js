import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../../styles/colors';

export default StyleSheet.create({
    container: {
        margin: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: colors.yellow,

        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,

    },
    inner_container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    user: {
        color: 'white',
        fontSize: 11,
    },
    date: {
        color: 'white',
        fontSize: 11,
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 5
    },
    like_count_container: {
        backgroundColor: colors.yellow,
        padding: 3,
        borderRadius: 20,
        marginRight: 3,
    },
    like_container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 3,
        paddingHorizontal: 10,
        borderRadius: 20,
        alignItems: 'center',
    },
    like_text: {
        color: colors.yellow,
        fontWeight: 'bold',
    },
    like_count_text: {
        color: 'white',
        fontWeight: 'bold',
    },
    footer: {
        alignItems: 'flex-end',
    },
 
})