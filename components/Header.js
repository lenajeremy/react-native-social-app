import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native';

import { GRAY } from '../assets/colors';
import ICONS from '../assets/icons';


export default function Header({ title, leftIcon, rightIcon, rightOnClick, rightIconType}) {

    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            {leftIcon ||
                <TouchableOpacity
                    style={styles.iconContainer}
                    onPress={() => navigation.goBack()}
                >
                    <ICONS.BACK size={20} />
                </TouchableOpacity>}
            { title}
            {
                rightIcon &&
                    rightIconType ===
                    'component' ?
                    rightIcon :
                    <TouchableOpacity style={[styles.iconContainer]} onPress={rightOnClick}>
                        {rightIcon}
                    </TouchableOpacity>}
        </View>
    );
}


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    iconContainer: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: GRAY,
        borderWidth: 1,
        borderRadius: 20,
        padding: 5,
    },
})
