import React from 'react';

import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import Routes from './routes';

import Ionicons from 'react-native-vector-icons/Ionicons';

import image3 from './assets/images/3.jpeg';

function App() {

    return (
        <Routes />
    )
}


const styles = StyleSheet.create({
    topImage: {
        width: 400,
        height: 500,
        borderRadius: 50,
        transform: [
            { rotate: '25deg' },
            { translateY: -200 },
            { translateX: -75 },
        ],
        position: 'absolute',
    },
    mainContainer: {
        paddingTop: 350,
        paddingHorizontal: 24,
        flex: 1,
        justifyContent: 'space-around',
    },
    mainText: {
        fontSize: 48,
    },
    dotsContainer: {
        marginVertical: 10,
        height: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    dot: {
        width: 13,
        height: 13,
        borderRadius: 10,
        backgroundColor: 'lightgray',
        margin: 4,
    },
    dotSelected: {
        backgroundColor: 'green'
    },
    button: {
        padding: 18,
        backgroundColor: '#37a91a',
        justifyContent: 'center',
        borderRadius: 50,
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 22,
    }
});


function Main({ navigation }) {

    const [activeDotIndex, setActiveDotIndex] = React.useState(0);

    return (
        <View style={styles.mainContainer}>
            <Image source={image3} style={styles.topImage} />
            <Text style={styles.mainText}>Get Food From Anywhere Around School</Text>
            <View style={styles.dotsContainer}>
                <View style={styles.dot}></View>
                <View style={[styles.dot, styles.dotSelected]}></View>
                <View style={styles.dot}></View>
            </View>
            <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => navigation.navigate('dribble')}
                style={styles.button}
            >
                <Ionicons name='mail' size={26} style={[styles.buttonText, { marginRight: 15 }]} />
                <Text style={styles.buttonText}>Continue with Email</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 }}>
                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => console.log('google')}
                    style={[styles.button, { backgroundColor: 'orange', width: 150, marginTop: 10 }]}
                >
                    <Text style={{ color: 'white', fontSize: 18 }}>Google</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => console.log('Facebook')}
                    style={[styles.button, { backgroundColor: 'orange', width: 150, marginTop: 10 }]}
                >
                    <Text style={{ color: 'white', fontSize: 18 }}>Facebook</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


export default App;