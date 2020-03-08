import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from './colors'

const Header = ({ title } ) => {
    return ( 
        <View style={styles.header}>
            <Text style={styles.heading}>{title}</Text>
        </View>
     );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 100,
        padding: 50,
        backgroundColor: colors.pc,
        alignItems: 'center',
        justifyContent: 'center'
    },
    heading: {
        fontSize: 18,
        color: 'white',
        paddingTop: 20
    }
})
 
export default Header;