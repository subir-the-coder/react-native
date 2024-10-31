import {StyleSheet, ScrollView, View, Text, Image } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View>
        <View style={styles.headingBg}>
            <Text style={styles.headingText}>People you may know</Text>
        </View>
        <View style={{flex:1}}>
        <ScrollView horizontal={true} style={styles.container}>
            <View style={[styles.card, styles.elevatedCard, {flex:1}]}>
            
                <View>
                    <Image 
                        source={{
                            uri: "https://wallpapers.com/images/high/anonymous-profile-silhouette-b714qekh29tu1anb.png"
                        }}
                        style = {styles.profImage}
                    />
                    <Text style={styles.headingText}>Mark Zuck</Text>
                </View>
                <View style={styles.sideways}>
                    <Text style={styles.cards}>Add</Text>
                    <Text style={styles.cards}>Remove</Text>
                </View>
            </View>
            <View style={[styles.card, styles.elevatedCard]}>
                <Text style={styles.cardText}>Friend2</Text>
            </View>
            <View style={[styles.card, styles.elevatedCard]}>
                <Text style={styles.cardText}>Friend3</Text>
            </View>
            <View style={[styles.card, styles.elevatedCard]}>
                <Text style={styles.cardText}>Friend4</Text>
            </View>
            <View style={[styles.card, styles.elevatedCard]}>
                <Text style={styles.cardText}>Friend5</Text>
            </View>
            <View style={[styles.card, styles.elevatedCard]}>
                <Text style={styles.cardText}>See More...</Text>
            </View>
        </ScrollView>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    profImage: {
        width: 130,
        height: 120,
        resizeMode: "contain",
        marginTop: 10,
    },
    sideways: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-end",
        marginBottom: 5,
        columnGap: 10,        
    },
    cards: {
        backgroundColor: "blue",
        color: "white",
        textAlign: "center",
        padding: 5,
        width: "45%",
        height: 25,
        borderRadius: 8,
        fontSize: 11,
    },
    headingText: {
        fontSize: 15,
        fontWeight: "bold",
        margin: 0,        
        padding: 5,
        color: "#000",
    },
    headingBg: {
        backgroundColor: "#fff",
    },
    card: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        width: 150,
        height: 200,
        borderRadius: 8,
        margin: 8,
        borderColor: "black",
        borderStyle: "solid",
        borderWidth: 1,
    },
    elevatedCard: {
        // elevation: 10,
        // shadowOffset: {
        //     width: 100,
        //     height: 100,
        // },
        // shadowColor: "#000",
        // shadowRadius: 50,
        // shadowOpacity: 1,
    },
    container: {
        padding: 8,
    },
    cardText: {
        fontSize: 16,
        color: "white",
        fontWeight: "bold",
        paddingBottom:10,
        paddingTop: 10,
        paddingLeft: 25,
        paddingRight: 25,
        backgroundColor: "blue",
        marginBottom:10,
        borderRadius:8,
    }
})

export default ElevatedCards