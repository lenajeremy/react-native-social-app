import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import {BaseText as Text} from '../components';

import Image1 from '../assets/images/7.jpeg';
import Image2 from '../assets/images/9.jpeg';

import ICONS from '../assets/icons';
import { DARK_BLACK, GRAY, LIGHT_GRAY, SOCIAL_PINK, SOCIAL_WHITE } from '../assets/colors';
import { useNavigation } from '@react-navigation/core';
import { ROUTE_NAMES } from '../routes';

const ProfileScreen = () => {

    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: DARK_BLACK }}>
            {buildCoverImageContainer()}
            {buildBasicUserDetails()}
        </View>
    )

    function buildCoverImageContainer(){
        return (
            <View style={styles.coverImageContainer}>
                <Image source={Image1} style={styles.coverImage} />
                <View style = {styles.actionContainer}>
                    <TouchableOpacity
                        style={styles.iconContainer}
                        onPress={() => navigation.navigate(ROUTE_NAMES.messagesScreen)}
                    >
                        <ICONS.MAIL size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.iconContainer}
                        onPress={() => {}}
                    >
                        <ICONS.BOOKMARKS size={20} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function buildBasicUserDetails(){
        return (
            <View style = {styles.userDetailsContainer}>
                <Image source = {Image2} style = {styles.userImage}/>
                <Text type = 'bold' style = {{fontSize: 18, marginTop: 10, marginVertical: 3}}>Jeremiah Lena</Text>
                <Text type = 'light' style = {{color: LIGHT_GRAY, fontSize: 16, marginBottom: 3}}>Brooklyn, NY</Text>
                <Text style = {{fontSize: 16}}>Writer by Profession, Artist by Passion</Text>
                <View style = {styles.followingInformation}>
                    <View>
                        <Text style = {styles.number}>2,354</Text>
                        <Text style = {{color: LIGHT_GRAY}}>Followers</Text>
                    </View>
                    <View>
                        <Text style = {styles.number}>2,354</Text>
                        <Text style = {{color: LIGHT_GRAY}}>Following</Text>
                    </View>
                    <TouchableOpacity style = {styles.followingButton}>
                        <Text style = {{fontSize: 15, fontWeight: '600'}}>Edit Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    coverImageContainer: {
        paddingHorizontal: 20,
        height: '25%',
        position: 'relative',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        overflow: 'hidden'
    },
    coverImage: {
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    iconContainer: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: DARK_BLACK,
        borderColor: GRAY,
        borderWidth: 1,
        borderRadius: 20,
        padding: 5,
        marginVertical: 10
    },
    actionContainer: {
        paddingTop: 50,
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    userImage:{
        width: 120,
        height: 120,
        borderRadius: 75,
        borderColor: SOCIAL_PINK,
        borderWidth: 3,
        backgroundColor: 'red',
        marginTop: -60
    },
    userDetailsContainer:{
        alignItems: 'center',
    },
    followingInformation: {
        flexDirection: 'row', 
        width: '100%', 
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: -4
    },
    number: {
        fontSize: 17,
        fontWeight: '800',
        marginBottom: 2,
    },
    followingButton: {
        borderWidth: 1,
        borderColor: SOCIAL_WHITE,
        width: 120,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    }
})
export default ProfileScreen;