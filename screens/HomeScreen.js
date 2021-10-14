import React from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    ScrollView,
    FlatList,
    Pressable,
    Image,
    SafeAreaView,
    Touchable,
    TouchableOpacity
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { ROUTE_NAMES } from '../routes';

import Image1 from '../assets/images/1.jpeg'
import Image2 from '../assets/images/2.jpeg'
import Image3 from '../assets/images/3.jpeg'
import Image4 from '../assets/images/4.jpg';
import Image5 from '../assets/images/5.jpg'
import Image6 from '../assets/images/6.jpg'
import Image7 from '../assets/images/7.jpeg'
import Image8 from '../assets/images/8.jpeg'
import Libery from '../assets/images/liberty.jpg'

import { BaseText as Text } from '../components';
import { DARK_BLACK, GRAY, SOCIAL_BLUE, SOCIAL_PINK, SOCIAL_WHITE } from '../assets/colors';
import ICONS from '../assets/icons';

const HomeScreen = () => {

    const navigation = useNavigation();

    return (
        <ScrollView style={{ backgroundColor: DARK_BLACK }} showsVerticalScrollIndicator={false}>
            <SafeAreaView style={{ backgroundColor: DARK_BLACK, flex: 1 }}>
                <StatusBar barStyle='light-content' backgroundColor={DARK_BLACK} />
                {buildHeader(navigation)}
                {buildStories()}
                {buildPosts()}
            </SafeAreaView>
        </ScrollView>
    )
}

function buildHeader(navigation) {
    return (
        <View style={styles.header}>
            <Text type='bold' style={{ fontSize: 18 }}>Good morning, Osas.</Text>
            <Pressable style={styles.iconContainer} onPress={() => navigation.navigate(ROUTE_NAMES.messagesScreen)}>
                {<ICONS.MAIL color={SOCIAL_WHITE} size={20} />}
                <View style={styles.iconDot}></View>
            </Pressable>
        </View>
    )
}

function buildStories() {
    const data = [
        {
            id: 1,
            storyImage: Image1,
            personImage: Image3
        },
        {
            id: 2,
            storyImage: Image2,
            personImage: Image1
        },
        {
            id: 3,
            storyImage: Image3,
            personImage: Image2
        },
        {
            id: 4,
            storyImage: Image1,
            personImage: Image3
        },
        {
            id: 5,
            storyImage: Image3,
            personImage: Image2
        },
    ]
    return (
        <View style={styles.storiesContainer}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={(item, key) => <Story key={key} story={item} />}
                keyExtractor={data.id}
            />
        </View>
    )
}

function buildPosts() {
    const posts = [
        {
            id: 1,
            text: `"If you think you're too small to make a difference, try sleeping with a mosquito." You can be whoever you want to be. Don't limit yourself. You are a star 🌟🌟`,
            user: { name: 'Osas Lena', image: Image3 },
            timePosted: '10 minutes ago',
            hashtags: ['#BOSSOFLIFE', "#BRINGBACKOURGIRLS"],
        },
        {
            id: 2,
            text: `Have you ever been in a bus and someone decides not to pay... Then the conductor starts making noise and swearing for people in the vehicle. 
            
Omo nawa for Lagos sha`,
            user: { name: 'moshood_d_boss', image: Image1 },
            timePosted: '30 minutes ago',
            hashtags: ['#LAG_LIFE', "#CHOPPINGMONEYWAYS"],
            images: [Image1, Image2]
        },
        {
            id: 3,
            text: `Have you ever been in a bus and someone decides not to pay... Then the conductor starts making noise and swearing for people in the vehicle. 
            
Omo nawa for Lagos sha`,
            user: { name: 'moshood_d_boss', image: Image8 },
            timePosted: 'an hour ago',
            hashtags: ['#family', "#react_native"],
            images: [Image7, Image6]
        },
        {
            id: 4,
            text: `"If you think you're too small to make a difference, try sleeping with a mosquito." You can be whoever you want to be. Don't limit yourself. You are a star 🌟🌟`,
            user: { name: 'Osas Lena', image: Image8 },
            timePosted: '10 minutes ago',
            hashtags: ['#BOSSOFLIFE', "#BRINGBACKOURGIRLS"]
        },
        {
            id: 5,
            text: 'Writing code is not that bad',
            user: { name: 'DevWrites', image: Image3 },
            timePosted: '2 hours ago',
        },
        {
            id: 6,
            user: { name: 'Jacinth', image: Image7 },
            images: [Libery],
            timePosted: '3 days ago'
        }
    ]
    return (
        <View style={styles.postContainer}>
            <View>
                <FlatList
                    data={posts}
                    keyExtractor={posts.id}
                    renderItem={({ item }) => <Post
                        text={item.text}
                        user={item.user}
                        timePosted={item.timePosted}
                        hashtags={item.hashtags}
                        images={item.images}
                    />}
                />
            </View>
        </View>
    )
}

export function Post({ text, type, images, user, timePosted, hashtags, additionalStyles }) {

    const navigation = useNavigation()

    const PostHeader = ({ user, timePosted }) => {


        return (
            <View style={[styles.postHeader, additionalStyles]}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Pressable onPress={() => navigation.navigate(ROUTE_NAMES.profileScreen)}>
                        <Image source={user.image} style={styles.postHeaderImage} />
                    </Pressable>
                    <View>
                        <Text type='bold' style={{ fontSize: 16 }}>{user.name}</Text>
                        <Text type='light' style={styles.postTime}>{timePosted}</Text>
                    </View>
                </View>
                {<ICONS.DOTS_VERTICAL />}
            </View>
        )
    };

    const PostContent = ({ text, hashtags }) => {
        return (
            <View style={styles.postContent}>
                { text && <Text style={styles.postText}>
                    {text}
                </Text>}
                {hashtags && <Text style={{ ...styles.postText, color: SOCIAL_BLUE, marginTop: 10 }}>{hashtags[0]}</Text>}
            </View>
        )
    };

    const PostActions = () => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginBottom: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity>
                            <ICONS.LIKE size={20} color={SOCIAL_WHITE} />
                        </TouchableOpacity>
                        <Text style={{ marginLeft: 10, fontSize: 14 }}>2,245</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15 }}>
                        <TouchableOpacity>
                            <ICONS.CHAT size={20} color={SOCIAL_WHITE} />
                        </TouchableOpacity>
                        <Text style={{ marginLeft: 10, fontSize: 14 }}>45</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15 }}>
                        <TouchableOpacity>
                            <ICONS.UPLOAD size={20} color={SOCIAL_WHITE} />
                        </TouchableOpacity>
                        <Text style={{ marginLeft: 10, fontSize: 14 }}>224</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity>
                        <ICONS.BOOKMARKS size={20} color={SOCIAL_WHITE} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const PostImages = ({ images }) => {
        if (images.length === 1) {
            return <Image style={[styles.postImage, { width: '100%', height: 200 }]} source={images[0]} resizeMode='cover' />
        } else {
            return (
                <FlatList
                    data={images}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <Image style={styles.postImage} source={item} resizeMode='cover' />}
                />
            )
        }
    }
    return (
        <View style={styles.post}>
            <Pressable onPress={() => navigation.navigate(ROUTE_NAMES.postScreen, {
                header: <PostHeader user={user} timePosted={timePosted} />,
                content: <PostContent text={text} hashtags={hashtags} />,
                images: images && <PostImages images={images} />,
                actions: <PostActions />
            })}>
                <PostHeader user={user} timePosted={timePosted} />
                <PostContent text={text} hashtags={hashtags} />
            </Pressable>
            {images && <PostImages images={images} />}
            <PostActions />
        </View>
    )
}
function Story({ story }) {

    let important = story.item;
    return (
        <View style={styles.story}>
            <Image
                source={important.storyImage}
                style={styles.storyImage}
                resizeMode='cover'
            />
            <Image
                source={important.personImage}
                style={styles.personImage}
                resizeMode='cover'
            />
        </View>
    );
}


export default HomeScreen;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingVertical: 18,
    },
    iconContainer: {
        width: 38,
        height: 38,
        borderRadius: 20,
        borderColor: GRAY,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    iconDot: {
        width: 8,
        height: 8,
        backgroundColor: SOCIAL_PINK,
        borderRadius: 4,
        position: 'absolute',
        right: 6,
        top: 8
    },
    storiesContainer: {
        paddingLeft: 24,
    },
    story: {
        width: 90,
        height: 140,
        marginRight: 10,
        position: 'relative'
    },
    storyImage: {
        borderRadius: 20,
        width: 90,
        height: 140,
    },
    personImage: {
        position: 'absolute',
        width: 40,
        height: 40,
        borderRadius: 20,
        bottom: 5,
        left: 25,
        borderColor: SOCIAL_PINK,
        borderWidth: 2
    },
    postContainer: {
        marginTop: 24,
    },
    post: {
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: GRAY
    },
    postHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    postHeaderImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 15
    },
    postTime: {
        fontSize: 12,
    },
    postContent: {
        marginTop: 12
    },
    postText: {
        lineHeight: 24,
        fontSize: 16
    },
    postImage: {
        height: 170,
        width: 280,
        borderRadius: 10,
        marginRight: 10,
        marginTop: 20,
    }
})
