import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SearchScreen from '../screens/SearchScreen';
import AlertScreen from '../screens/AlertScreen';
import NewPostScreen from '../screens/NewPostScreen';

import { ROUTE_NAMES } from '../routes';

import ICONS from '../assets/icons';
import { DARK_BLACK, LIGHT_GRAY, SOCIAL_BLUE, SOCIAL_PINK, SOCIAL_WHITE } from '../assets/colors';
import { View, StyleSheet, Platform } from 'react-native';

const BottomTabs = createBottomTabNavigator();

export default function Tabs() {
    return (
        <BottomTabs.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: DARK_BLACK,
                    paddingHorizontal: 10,
                    bottom: 0,
                    height: Platform.OS === 'android' ? 70 : 80,
                    paddingVertical: Platform.OS === 'android' ? 0 : 10
                }
            }}
        >

            <BottomTabs.Screen
                name={ROUTE_NAMES.homeScreen}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <ICONS.MENU size={24} color={focused ? SOCIAL_WHITE : LIGHT_GRAY} />
                    )
                }}
            />

            <BottomTabs.Screen
                name={ROUTE_NAMES.searchScreen}
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <ICONS.SEARCH size={24} color={focused ? SOCIAL_WHITE : LIGHT_GRAY} />
                    )
                }}
            />

            <BottomTabs.Screen
                name={ROUTE_NAMES.newPostScreen}
                component={NewPostScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            <View style={{ ...style.newPostIcon, ...style.left }}></View>
                            <View style={{ ...style.newPostIcon, ...style.right }}></View>
                            <View style={style.newPostIcon}>
                                <ICONS.ADD size={35} color={DARK_BLACK} />
                            </View>
                        </>
                    )
                }}
            />

            <BottomTabs.Screen
                name={ROUTE_NAMES.alertScreen}
                component={AlertScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <ICONS.NOTIFICATIONS size={24} color={focused ? SOCIAL_WHITE : LIGHT_GRAY} />
                    )
                }}
            />

            <BottomTabs.Screen
                name={ROUTE_NAMES.profileScreen}
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <ICONS.USER size={28} color={focused ? SOCIAL_WHITE : LIGHT_GRAY} />
                    )
                }}
            />
        </BottomTabs.Navigator>
    );
}

const style = StyleSheet.create({
    newPostIcon: {
        backgroundColor: SOCIAL_WHITE,
        width: 60,
        paddingHorizontal: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        height: 40,
        zIndex: 1
    },
    left: {
        position: 'absolute',
        left: Platform.OS === 'android' ? 3 : 2,
        bottom: -3,
        top: Platform.OS === 'android' ? 15 : 0,
        height: 39,
        backgroundColor: SOCIAL_PINK
    },
    right:{
        position: 'absolute',
        right: Platform.OS === 'android' ? 3 : 2,
        height: 39,
        top: Platform.OS === 'android' ? 15 : 0,
        backgroundColor: SOCIAL_BLUE,
        bottom: -3,
    }
})