import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* NAVIGATION ELEMENTS */
import BottomTabs from './navigation/bottomTabs';
import ChatScreen from './screens/ChatScreen';
import MessagesScreen from './screens/MessagesScreen';
import PostScreen from './screens/PostScreen';

export const ROUTE_NAMES = {
    homeScreen: 'Home',
    chatScreen: 'Chat',
    profileScreen: 'Profile',
    alertScreen: 'Alert',
    newPostScreen: 'NewPost',
    searchScreen: 'Search',
    messagesScreen: 'Messages',
    postScreen: 'Post'
}

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName = { ROUTE_NAMES.homeScreen }
                screenOptions = {{
                    headerShown: false
                }}
            >
                <Stack.Screen 
                    name = { ROUTE_NAMES.chatScreen } 
                    component = { ChatScreen }
                />
                
                <Stack.Screen
                    name = { ROUTE_NAMES.messagesScreen }
                    component = { MessagesScreen }
                />

                <Stack.Screen
                    name = { ROUTE_NAMES.postScreen }
                    component = { PostScreen }
                />

                <Stack.Screen
                    name = { ROUTE_NAMES.homeScreen }
                    component = { BottomTabs }
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


