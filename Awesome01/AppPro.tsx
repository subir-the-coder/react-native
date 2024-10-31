import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    useColorScheme,
} from 'react-native'

function AppPro(): JSX.Element{
    const colorScheme = useColorScheme()
    const isDarkMode = useColorScheme() === 'dark'
    return(
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.whiteText : styles.darkText}>useColorScheme(): {colorScheme}</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
           
        },
        whiteText: {
            color: "#FFFFFF",
        },
        darkText: {
            color: "#000000",
            fontSize: 70,
            fontWeight: "bold",
        }
    }
)

export default AppPro