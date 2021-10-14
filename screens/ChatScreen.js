import React, { useState, useRef } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Image,
    FlatList,
    TouchableOpacity,
    Pressable
} from 'react-native';

import { Header, BaseText as Text, InputField } from '../components'

import { DARK_BLACK, GRAY, SOCIAL_BLUE, SOCIAL_PINK } from '../assets/colors'

import ICONS from '../assets/icons'

const ChatScreen = ({route}) => {

    const scrollToBottomRef = useRef();

    function _renderItems({ item }) {
        return (
            <ChatMessage message={item} />
        )
    }

    function ChatMessage({ message }) {
        return (
            <View style={{ flexDirection: 'row', justifyContent: message.self ? 'flex-end' : 'flex-start'}}>
                { !message.self && <Image source={route.params.image} style={{ width: 30, height: 30, borderRadius: 15 }} />}
                <View style={[styles.message, getAppropriateChatStyle(message.self)]}>
                    <Text style = {{fontSize: 16, lineHeight: 20}}>{message.text}</Text>
                </View>
            </View>
        )
    }

    function getAppropriateChatStyle(isSelf){
        return {
            backgroundColor: isSelf ? SOCIAL_BLUE : GRAY,
            borderBottomLeftRadius: isSelf ? 15 : 3,
            borderBottomRightRadius: isSelf ? 3 : 15
        }
    }

    const messages = [
        {
            text: 'Hello there',
            self: false
        },
        {
            text: 'I\'m fine.. And you?',
            self: true
        },
        {
            text: 'Nice to hear. It\'s been quite a long time!',
            self: false
        },
        {
            text: 'IKR... I\'not been in the country for some time now.',
            self: true
        },
        {
            text: 'I travelled to US to go do some business',
            self: true
        },
        {
            text: 'WOW... That\'s awesome. So, you are an international man now?',
            self: false
        },
        {
            text: 'That\'s very nice to hear. I\'m very happy for your success',
            self: false
        },
        {
            text: 'Thank man... I really appreciate',
            self: true
        },
        {
            text: 'So tell me about you... What do you do? What projects are you working on?',
            self: true
        },
        {
            text: 'Send me some money man... I need the dough seriously' 
        }
    ];

    const [ newMessage, setNewMessage ] = useState('')
    const [ chatMessages, setChatMessages ] = useState(messages);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: DARK_BLACK }}>
            <StatusBar backgroundColor={DARK_BLACK} barStyle='light-content' />
            <Header
                title={
                    <View style={{ alignItems: 'center' }}>
                        <Image source={route.params.image} style={styles.userImage} />
                    </View>}
                rightIcon={<ICONS.SETTINGS size={20} />}
                rightOnClick={() => alert('hello')}
            />
            <Text style={styles.userName}>{route.params.name}</Text>
            <View style={styles.messagesContainer}>
                <FlatList
                    ref = {ref => this.flatListRef = ref}
                    onContentSizeChange = {() => this.flatListRef.scrollToEnd()}
                    data={chatMessages}
                    renderItem={_renderItems}
                    showsVerticalScrollIndicator = {false}
                    ListFooterComponent = {<View ref = {scrollToBottomRef}></View>}
                />
            </View>
            <InputField 
                value = {newMessage}
                setValue = {setNewMessage}
                placeholder = "Type your message here" 
                prefixIcon = {
                <TouchableOpacity style = {{alignItems: 'center', justifyContent : 'center'}}>
                    <ICONS.EMOJI style = {{marginRight: 8}} size = {24}/>
                </TouchableOpacity>}
                suffixIcon = {
                    <Pressable 
                        style = {styles.sendButton} 
                        onPress = {() => {
                            setChatMessages(chatMessages => [...chatMessages, {text: newMessage, self : true}])
                            setNewMessage('');
                            }
                        }
                    >
                        <ICONS.SEND size = {20}/>
                    </Pressable>
                }
                additionalStyles = {{
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingVertical: 7,
                    height: 50,
                    marginHorizontal: 10
                }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    userImage: {
        width: 37,
        height: 37,
        borderRadius: 27
    },
    userName: {
        top: -12,
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '500',
        letterSpacing: 0.5,
        // marginBottom: 10
    },
    messagesContainer: {
        paddingHorizontal: 24,
        paddingTop: 30,
        borderColor: GRAY,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        flex: 1
    },
    message: {
        marginBottom: 15,
        maxWidth: '70%',
        paddingVertical: 7,
        paddingHorizontal: 10,
        borderRadius: 15,
        marginLeft: 10,
        borderBottomRightRadius: 2
    },
    sendButton: {
        padding: 9,
        borderRadius: 50,
        backgroundColor: SOCIAL_PINK
    }
})

export default ChatScreen;