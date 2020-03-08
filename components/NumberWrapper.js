import React from 'react';
import { View, Text, StyleSheet, ShadowPropTypesIOS } from 'react-native';
import color from './colors'

const NumberWrapper = (props) => {
    return ( 
        <View style={styles.wrapper}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
     );
}

const styles = StyleSheet.create({
    wrapper: {
        borderWidth: 2,
        borderColor: color.pc,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    number: {
        color: color.pc,
        fontSize: 22,

    }
})
 
export default NumberWrapper;