import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    View,
    Image,
    TextInput,
    Alert,
    Pressable
} from 'react-native';

import Image1 from '../assets/images/8.jpeg';
import { DARK_BLACK, LIGHT_GRAY, SOCIAL_BLUE, SOCIAL_PINK, GRAY } from '../assets/colors';
import ICONS from '../assets/icons';

import { BaseText as Text, Header } from '../components';
import { useNavigation } from '@react-navigation/native';

const NewPostScreen = () => {

    const navigation = useNavigation()

    const [post, setPost] = useState({
        text: '',
        attachments: []
    });

    function handleDiscard(){
        if (post.text) {
            Alert.alert('Save to drafts', 'Do you want to discard this post or you want to continue later?', []);
        }else{
            navigation.goBack();
        }
    }

    const DiscardText = () => {
        return (
            <Pressable onPress={handleDiscard}>
                <Text style={{ color: SOCIAL_BLUE, fontSize: 15, fontWeight: '500' }}>Discard</Text>
            </Pressable>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: DARK_BLACK }}>
            <Header
                leftIcon={<DiscardText />}
                rightIconType='component'
                rightIcon={<TouchableOpacity style={styles.publishButton}>
                    <Text style={{ fontWeight: 'bold' }}>Publish</Text>
                </TouchableOpacity>}
                title={<Text style={{ fontSize: 18, letterSpacing: 1 }}>CREATE</Text>}
            />
            <PostInput setPost={setPost} post={post} />
            <View style={{ alignItems: 'center' }}>
                <View style={styles.postOrStory}>
                    <View style={[styles.postOrStoryContent, styles.activeChoice]}>
                        <Text style={{ textAlign: 'center' }}>Post</Text>
                    </View>
                    <View style={styles.postOrStoryContent}>
                        <Text style={{ textAlign: 'center' }}>Story</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
function PostInput({ post, setPost }) {

    const [optionsOpen, setOptionsOpen] = useState(false);

    return (
        <View style={{ paddingHorizontal: 20, flex: 1 }}>
            <View style={styles.postInput}>
                <Image source={Image1} style={styles.userImage} />
                <TextInput
                    placeholder='Enter your post'
                    placeholder="What's on your mind?"
                    placeholderTextColor={LIGHT_GRAY}
                    multiline={true}
                    numberOfLines={3}
                    value={post}
                    onChangeText={text => setPost({ ...post, text })}
                    style={{
                        color: 'white',
                        fontSize: 16,
                        marginRight: 60,
                        marginBottom: 40,
                    }}
                />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Pressable style={styles.iconContainer} onPress={() => setOptionsOpen(!optionsOpen)}>
                    <ICONS.ADD />
                </Pressable>
                {
                    optionsOpen &&
                    <View style={styles.createOptions}>
                        <ICONS.IMAGE />
                        <ICONS.GIF size={28} />
                        <ICONS.CAMERA />
                        <ICONS.ATTACHMENT />
                    </View>
                }
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    publishButton: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: SOCIAL_PINK,
        borderRadius: 40
    },
    postInput: {
        flexDirection: 'row',
        marginVertical: 20
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 20
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
    postOrStory: {
        flexDirection: 'row',
        padding: 3,
        width: '50%',
        borderColor: LIGHT_GRAY,
        borderWidth: 1,
        borderRadius: 40,
        marginBottom: 40,
        justifyContent: 'space-between'
    },
    createOptions: {
        flexDirection: 'row',
        backgroundColor: GRAY,
        padding: 3,
        borderRadius: 20,
        paddingHorizontal: 10,
        width: 170,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginLeft: 10
    },
    postOrStoryContent: {
        padding: 5,
        flex: 1,
        borderRadius: 20
    },
    activeChoice: {
        backgroundColor: SOCIAL_PINK
    }
})

export default NewPostScreen;