import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
        <View style={styles.headingBg}>
            <Text style={styles.headingText}>facebook</Text>
        </View>
        <View style={styles.container}>
            <View style={[styles.card, styles.cardOne]}>
                <Text style={styles.cardText}>
                    Ratna Da
                </Text>
            </View>
            <View  style={[styles.card, styles.cardTwo]}>
                <Text style={styles.cardText}>
                    Subir
                </Text>
            </View>
            <View  style={[styles.card, styles.cardThree]}>
                <Text style={styles.cardText}>
                    Gray
                </Text>
            </View>    
        </View>      
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 30,
        fontWeight: "bold",
        margin: 5,        
        padding: 5,
        color: "#fff",
    },
    headingBg: {
        backgroundColor: "#00f",
    },
    container: {
        flex: 1,
        flexDirection: "row",
    },
    card: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
        width: "33%",
        height: 200,
        borderRadius: 8,
        margin: 8
    }, 
    cardOne: {
        backgroundColor: "tomato",
    },
    cardTwo: {
        backgroundColor: "dodgerblue",
    },
    cardThree: {
        backgroundColor: "green",
    },
    cardText: {
        fontSize: 20,
        fontStyle: "italic",
        color: "white",
        fontWeight: "bold",
        paddingBottom:8,
    }
})