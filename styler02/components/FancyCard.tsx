import { Image, View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View>
        <View>
          <Text style={styles.headingText}>Groups for you</Text>
          <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.headingText}>React Native Programming Group</Text>
            <Image 
              source = {{
                uri: "https://w0.peakpx.com/wallpaper/1021/487/HD-wallpaper-technology-code-programming-programmer.jpg"
              }}
              style = {styles.cardImage}
            />
            <View style={styles.cardBody}>
              <Text style={styles.cardDescription}>A group of Programmers busy frustrating their life with codes and finding bugs</Text>
              <Text style={styles.cardFooter}>Join Now</Text>
            </View>
          </View>       
        </View>
    </View>

  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 15,
        fontWeight: "bold",
        margin: 5,        
        padding: 5,
        color: "#000",
    },
    card: {
      width: 400,
      marginHorizontal: 6,
      borderColor: "#000",
      borderWidth: 1,
      borderRadius: 8,
    },
    cardElevated: {
      backgroundColor: "#fff",
      color: "#000",
      elevation: 10,
      shadowOffset: {
        width: 5,
        height: 5,
      }
    },
    cardImage: {
      height: 200,
      marginBottom: 8,
    },
    cardBody: {
      flex: 1,
      flexGrow: 1,
      paddingHorizontal: 8,
    },
    cardDescription: {
      fontSize: 18,
    },
    cardFooter: {
      backgroundColor: "blue",
      color: "#fff",
      fontWeight: "bold",
      padding: 8,
      margin: 5,
      textAlign: "center",
      fontSize: 18,
    },
})

export default FancyCard