import React, { useState } from 'react';
import {
    View,
    SafeAreaView,
    StyleSheet,
    FlatList,
    Image,
    Pressable
} from 'react-native';

import { DARK_BLACK, GRAY, LIGHT_GRAY, SOCIAL_BLUE } from '../assets/colors';

import { BaseText as Text, Header, InputField } from '../components';

import ICONS from '../assets/icons';

import Image1 from '../assets/images/liberty.jpg';
import Image2 from '../assets/images/13.jpeg';
import Image3 from '../assets/images/7.jpeg';
import Image4 from '../assets/images/8.jpeg';
import Image5 from '../assets/images/9.jpeg';

export default function PostScreen({ route }) {

    const {
        header,
        content,
        images,
        actions
    } = route.params;

    const comments = [
        {
            name: 'Jessica Thompson',
            comment: 'Love this🍷',
            time: '8 mins ago',
            likeCount: 86,
            isLiked: false,
            userImage: Image2
        },
        {
            name: 'William Shakespeare',
            comment: 'Tonight is the night the storms calm',
            time: '19 mins ago',
            likeCount: 5,
            isLiked: true,
            userImage: Image1
        },
        {
            name: 'Leslie Alexander',
            comment: 'Very true❤️❤️',
            time: '4 hours ago',
            likeCount: 10,
            isLiked: false,
            userImage: Image5
        },
        {
            name: 'Jessica Thompson',
            comment: 'Love this🍷',
            time: '8 mins ago',
            likeCount: 86,
            isLiked: false,
            userImage: Image2
        },
        {
            name: 'William Shakespeare',
            comment: 'Tonight is the night the storms calm',
            time: '19 mins ago',
            likeCount: 5,
            isLiked: true,
            userImage: Image1
        },
        {
            name: 'Leslie Alexander',
            comment: 'Very true❤️❤️',
            time: '4 hours ago',
            likeCount: 10,
            isLiked: false,
            userImage: Image5
        }
    ]

    const [comment, setComment] = useState('');

    const renderItem = ({ item }) => (
        <Comment item={item} />
    )

    const Comment = ({ item }) => {

        const [isLiked, setLiked] = useState(item.isLiked);

        return (
            <View style={styles.comment}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={{ width: 30, height: 30, borderRadius: 20 }} source={item.userImage} />
                    <View style={styles.commentContent}>
                        <Text style={{ fontSize: 17, fontWeight: '600', marginBottom: 5 }}>{item.name}</Text>
                        <Text style={{ fontSize: 15, marginBottom: 3 }}>{item.comment}</Text>
                        <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{ fontSize: 15, color: LIGHT_GRAY }}>{item.time}</Text>
                            <View style={{ height: 3, width: 3, backgroundColor: LIGHT_GRAY, margin: 10 }}></View>
                            <Text style={{ fontSize: 15, color: LIGHT_GRAY }}>{item.likeCount} likes</Text>
                        </View>
                    </View>
                </View>
                <Pressable onPress={() => setLiked(!isLiked)}>
                    <ICONS.LIKE size={18} color={isLiked ? SOCIAL_BLUE : null} />
                </Pressable>
            </View>
        )
    }

    const ListHeaderComponent = () => (
        <>
            <Header
                title={<Text style={{ fontSize: 16, letterSpacing: 1.3 }}>POST</Text>}
                rightIconType='component'
                rightIcon={<View></View>}
            />
            <View style={styles.mainPostContainer}>
                {header}
                {content}
                {images}
                {actions}
            </View>
            <View style={styles.commentSection}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ color: LIGHT_GRAY, fontSize: 15, letterSpacing: 0.7 }}>COMMENTS (45)</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ marginRight: 5, fontWeight: '600' }}>Recent</Text>
                        <ICONS.CHEVRONDOWN />
                    </View>
                </View>
            </View>
            <InputField 
                value = {comment}
                setValue = {setComment}
                placeholder = 'Type your comment here...'
                additionalStyles = {{
                    marginBottom: 20,
                }}
            />
        </>
    )

    const ListEmptyComponent = () => (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: 350 }}>
            <Text style={{ fontSize: 20 }}>No Comments on this post</Text>
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: DARK_BLACK }}>
            <FlatList
                ListHeaderComponent={ListHeaderComponent}
                ListEmptyComponent={ListEmptyComponent}
                data={comments}
                renderItem={renderItem}
                showsVerticalScrollIndicator = {false}
            />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    mainPostContainer: {
        paddingHorizontal: 20,
        paddingBottom: 10,
        borderBottomColor: GRAY,
        borderBottomWidth: 1
    },
    commentSection: {
        paddingHorizontal: 20,
        marginVertical: 15,
        marginBottom: 0
    },
    comment: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    commentContent: {
        marginLeft: 15,
    }

})