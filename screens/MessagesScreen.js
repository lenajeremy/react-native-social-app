import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native';
import {
    BaseText as Text,
    Header,
    InputField
} from '../components/index';

import Image1 from '../assets/images/8.jpeg';
import Image2 from '../assets/images/9.jpeg';
import Image3 from '../assets/images/6.jpg';
import Image4 from '../assets/images/2.jpeg';


import { DARK_BLACK, GRAY, LIGHT_GRAY } from '../assets/colors';
import ICONS from '../assets/icons';
import { useNavigation } from '@react-navigation/core';
import { ROUTE_NAMES } from '../routes';

const MessagesScreen = () => {

    const [searchValue, setSearchValue] = useState('');
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: DARK_BLACK }}>
            <StatusBar backgroundColor={DARK_BLACK} barStyle='light-content' />
            <Header
                title={<Text style = {styles.text}>MESSAGES</Text>}
                rightIcon={<ICONS.SETTINGS size={20} />}
                rightOnClick={() => alert('hello')}
            />
            <Chats
                ListHeaderComponent={() => (
                    <>
                        <InputField
                            placeholder='Who do you want to chat with?'
                            suffixIcon={<ICONS.SEARCH size={20} color={LIGHT_GRAY} />}
                            additionalStyles={{
                                marginBottom: 25,
                            }}
                            value = {searchValue}
                            setValue = {setSearchValue}
                        />
                        <PinnedChats />
                    </>
                )}
            />
        </SafeAreaView>
    )
}

const PinnedChats = () => {
    return (
        <View style={styles.pinnedChats}>
            <Text style={styles.label}>PINNED</Text>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity>
                    <View style={styles.pinnedPerson}>
                        <Image source={Image1} style={styles.pinnedImage} />
                        <Text style={styles.pinnedName}>Obama</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.pinnedPerson}>
                        <Image source={Image2} style={styles.pinnedImage} />
                        <Text style={styles.pinnedName}>Jeremiah</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.pinnedPerson}>
                        <Image source={Image3} style={styles.pinnedImage} />
                        <Text style={styles.pinnedName}>John</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Chats = ({ ListHeaderComponent }) => {

    const naviagation = useNavigation();

    const chats = [
        {
            name: 'Jeremiah Lena',
            lastMessage: 'Jesus is taking care of me',
            image: Image2,
            lastSeen: '4 hrs ago'
        },
        {
            name: 'Jessica Thompson',
            lastMessage: 'Sure! Sunday works for...',
            image: Image4,
            lastSeen: '5 hrs ago'
        },
        {
            name: 'Barack Obama',
            lastMessage: 'Send your account num...',
            image: Image1,
            lastSeen: '6 hrs ago'
        },
        {
            name: 'Winner Okere',
            lastMessage: 'See as you dey fresh',
            image: Image2,
            lastSeen: '17 hrs ago'
        },
        {
            name: 'Jessica Thompson',
            lastMessage: 'Sure! Sunday works for me.',
            image: Image1,
            lastSeen: '22 hrs ago'
        },
        {
            name: 'Barack Obama',
            lastMessage: 'Send your account num...',
            image: Image4,
            lastSeen: '1 day ago'
        },
        {
            name: 'Winner Okere',
            lastMessage: 'See as you dey fresh',
            image: Image2,
            lastSeen: '17 hrs ago'
        },
        {
            name: 'Jessica Thompson',
            lastMessage: 'Sure! Sunday works for me.',
            image: Image1,
            lastSeen: '22 hrs ago'
        },
        {
            name: 'Barack Obama',
            lastMessage: 'Send your account num...',
            image: Image4,
            lastSeen: '1 day ago'
        }
    ]

    const _renderItems = ({ item }) => (
        <TouchableOpacity style={styles.singleChat} onPress = {() => naviagation.navigate(ROUTE_NAMES.chatScreen, item)}>
            <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                <Image style={{ width: 45, height: 45, borderRadius: 50 }} source={item.image} />
                <View style={styles.chatContent}>
                    <Text style = {{fontSize: 18, fontWeight: '500', marginBottom: 6}}>{item.name}</Text>
                    <Text style = {{fontSize: 16 }}>{item.lastMessage}</Text>
                </View>
            </View>
            <View>
                <Text style = {{color: LIGHT_GRAY}}>{item.lastSeen}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <FlatList
            ListHeaderComponent={ListHeaderComponent}
            data={chats}
            renderItem={_renderItems}
            showsVerticalScrollIndicator = {false}
            keyExtractor = {(_, index) => index}
        />
    );
}
const styles = StyleSheet.create({
    pinnedChats: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderTopColor: GRAY,
        borderTopWidth: 1,
        borderBottomColor: GRAY,
        borderBottomWidth: 1,
        paddingBottom: 25
    },
    pinnedImage: {
        width: 50,
        height: 50,
        borderRadius: 30
    },
    pinnedName: {
        fontSize: 15,
        marginTop: 10,
        textAlign: 'center',
        fontWeight: '500'
    },
    pinnedPerson: {
        marginRight: 30,
        alignItems: 'center'
    },
    label: {
        fontSize: 15,
        letterSpacing: 1.4,
        color: LIGHT_GRAY,
        marginBottom: 20
    },
    singleChat: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomColor: GRAY,
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    chatContent: {
        marginLeft: 15,
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 17,
        letterSpacing: 1
    },
})
export default MessagesScreen;