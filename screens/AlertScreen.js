import React, { useEffect, useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    View,
    SectionList
} from 'react-native';
import { DARK_BLACK, GRAY, LIGHT_GRAY, SOCIAL_BLUE, SOCIAL_PINK, SOCIAL_WHITE } from '../assets/colors';
import { BaseText as Text, Header } from '../components';

import ICONS from '../assets/icons';

const AlertScreen = () => {


    const alerts = [
        {
            title: 'Today',
            data: [
                {
                    type: 'like',
                    text: 'Sofia, John and +19 others liked your post.',
                    boldText: 'Sofia, John and 19+ others',
                    time: '10m ago'
                },
                {
                    type: 'like',
                    text: 'Rebecca, Daisy and +11 others liked your post.',
                    boldText: 'Rebecca, Daisy and +11 others',
                    time: '30m ago'
                }
            ]
        },
        {
            title: 'Yesterday',
            data: [
                {
                    type: 'comment',
                    text: 'Katrina, Denver and +2 others commented on your post.',
                    boldText: 'Katrina, Denver and +2 others',
                    time: '1d ago'
                },
                {
                    type: 'celebration',
                    text: 'Savannah Wilson is celebrating birthday today. Drop a wish!',
                    bold: 'Savannah Wilson',
                    time: '1d ago'
                },
                {
                    type: 'mention',
                    text: 'Ralph Edwards mentioned you in a post.',
                    bold: 'Ralph Edwards',
                    time: '1d ago'
                }
            ]
        }, 
        {
            title: 'Thursday',
            data: [
                {
                    type: 'celebration',
                    text: 'Kehinde Taiwo celebrated his birthday yesterday. It\'s not too late to wish him a happy birthday',
                    bold: 'Kehinde Taiwo celebrated his birthday yesterday.',
                    time: '2d ago'
                },
                {
                    like: 'like',
                    text: 'Marvelous, Theresa and +30 others liked your photo.',
                    bold: 'Marvelous, Theresa and +30 others',
                    time: '2d ago'
                },
                {
                    like: 'like',
                    text: 'Marvelous invited you to like her page Marveliscious Cakes🍰🥮. ',
                    bold: 'Marvelous invited you to like her page Marveliscious.',
                    time: '2d ago'
                }
            ]
        }
    ];

    const _renderAlerts = ({ item }) => <NotificationAlert item = {item}/>

    function NotificationAlert({ item }) {

        let IconElement = null;

        switch (item.type) {
            case 'like':
                IconElement = <ICONS.LIKE color = {SOCIAL_BLUE} size = {18}/>
                break;

            case 'comment':
                IconElement = <ICONS.CHAT color = {SOCIAL_PINK} size = {18}/>
                break;
            
            case 'celebration':
                IconElement = <ICONS.CAMERA color = {SOCIAL_WHITE} size = {18}/>
                break;

            default:
                IconElement = <ICONS.BOOKMARKS color = {SOCIAL_BLUE} size = {18}/>
        }

        return (
            <View style = {styles.notificationContainer}>
                <View style = {styles.iconContainer}>
                {IconElement}
                </View>
                <View>
                <Text style = {styles.alertText}>{item.text}</Text>
                <Text style = {{fontSize: 14, color: LIGHT_GRAY}}>{item.time}</Text>
                </View>
            </View>
        );
    }

    return (
        <SafeAreaView style={ { flex: 1, backgroundColor: DARK_BLACK }}>
            <Header
                leftIcon={<Text style={styles.alertTitle}>Alerts</Text>}
                rightIcon={<Text style={styles.markAllAsRead}>Mark all as read</Text>}
                rightIconType='component'
            />
            <SectionList
            style = {styles.alertContainer}
                sections={alerts}
                renderItem={_renderAlerts}
                showsVerticalScrollIndicator = {false}
                renderSectionHeader = {({section : {title}}) => <Text style = {styles.sectionTitle}>{title}</Text>}
            />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    alertTitle: {
        fontSize: 24,
        fontWeight: '700',
    },
    markAllAsRead: {
        color: SOCIAL_PINK,
        fontSize: 15,
        fontWeight: '600'
    },
    sectionTitle: {
        color: LIGHT_GRAY,
        textTransform: 'uppercase',
        letterSpacing: 0.9,
        fontSize: 16,
        marginTop: 30,
        paddingHorizontal: 20
    },
    notificationContainer: {
        flexDirection: 'row',
        paddingTop: 30,
        paddingBottom: 10,
        alignItems: 'center',
        borderColor: GRAY,
        borderBottomWidth: 1,
        paddingHorizontal: 20,
        paddingRight: 70
    },
    iconContainer: {
        backgroundColor: GRAY,
        padding: 10,
        borderRadius: 50,
        marginRight: 15
    },
    alertText:{
        fontSize: 15,
        color: SOCIAL_WHITE,
        lineHeight: 24,
        marginBottom: 5
    }
});


export default AlertScreen;