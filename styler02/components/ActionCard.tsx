import { Image, StyleSheet, Text, TouchableOpacity, View, Linking } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(link: String){
        Linking.openURL(link)
    }
  return (
    <View>
        <View style={styles.container}>
            <View>
                <Text style={styles.headingText}>Nearby Events</Text>
            </View>
            <Image 
                source={{
                    uri: "https://i.pinimg.com/736x/95/e9/d8/95e9d8383e89e22f39f49efc9f217e70.jpg"
                }}
                style={styles.cardImage}
            />
            <View>
                <Text style={styles.label}>Non Stop Coding Competition</Text>
                <Text style={styles.description}>Join || Win || Code || Follow</Text>
            </View>
            <View style={styles.footerContainer}>
                <TouchableOpacity
                    onPress={()=>openWebsite("http://www.google.com")}
                >
                    <Text style={styles.social}>Interested</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>openWebsite("http://www.computerkorner.org")}
                >
                    <Text style={styles.social}>Follow Us</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        margin: 8,
        marginVertical: 20,
        width: 395,
        height:500,
        borderWidth:1,
        borderColor: "#000",
        borderRadius: 8,
        // elevation: 20,
        backgroundColor: "fff",
        color: "#000",
    },
    headingText: {
        padding: 10,
        fontSize: 20,
        fontWeight:"bold",
    },
    cardImage: {
        width: "100%",
        height:300,
        resizeMode: "contain",
        backgroundColor: "#333",
    },
    label: {
        marginVertical: 10,
        paddingHorizontal: 8,
        // backgroundColor: "#fff",
        height: 20,
        fontSize: 18,
        fontWeight: "bold",
    },
    description: {
        paddingHorizontal: 8,
        fontSize: 17,
        fontWeight: "bold",
        fontStyle: "italic",
        color: "#333",
    },
    footerContainer: {
        padding: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        // backgroundColor: "tomato",
        marginVertical: 10,

    },
    social: {
        fontSize: 16,
        fontWeight: "bold",
        backgroundColor: "blue",
        color: "#fff",
        paddingHorizontal: 30,
        paddingVertical: 12,
    }
})
