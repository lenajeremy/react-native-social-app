import React from 'react';
import {
    TextInput,
    StyleSheet,
    View,
    Platform
} from 'react-native';

import { GRAY, LIGHT_GRAY, SOCIAL_WHITE } from '../assets/colors';

export default function InputField({
    placeholder,
    value,
    setValue,
    prefixIcon,
    suffixIcon,
    additionalStyles
}) {
    return (
        <View style={{ ...styles.inputFieldContainer, ...additionalStyles }}>
            <View style = {{flexDirection: 'row'}}>
                {prefixIcon}
                <TextInput
                    style={styles.inputField}
                    placeholder={placeholder}
                    placeholderTextColor={LIGHT_GRAY}
                    value = {value}
                    onChangeText = {text => setValue(text)}
                />
            </View>
            {suffixIcon}
        </View>
    )
}

const styles = StyleSheet.create({
    inputFieldContainer: {
        backgroundColor: GRAY,
        paddingHorizontal: 18,
        paddingVertical: Platform.OS === 'android' ? 1 : 11,
        marginHorizontal: 20,
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    inputField: {
        fontSize: 15,
        color: SOCIAL_WHITE
    }
})