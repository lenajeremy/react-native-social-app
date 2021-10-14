// import React from 'react';
// import { Text, StyleSheet } from 'react-native';

// function BaseText ({style, children}){
//     return <Text style = {{...styles.text, ...style}}>{children}</Text>
// }

// const styles = StyleSheet.create({
//     text: {
//         color: 'white',
//     }
// });
// export default BaseText;

import React from 'react';

import { Text } from 'react-native';
import { SOCIAL_WHITE } from '../assets/colors';

export default function BaseText({ style, children, type }){

    const setFont = (type) => {
        switch (type) {
            case 'bold':
                return 'Inter_600SemiBold';
            case 'light':
                return 'Inter_200ExtraLight';
            default:
                return 'Inter_400Regular'
        }
    }

    return (
        <Text 
            style = {{
                fontWeight: type === 'light' ? '300' : type,
                color: SOCIAL_WHITE, 
                ...style
            }}
        >
            { children }
        </Text>
    );
}