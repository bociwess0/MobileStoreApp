import { Image, Pressable, StyleSheet } from "react-native";


function Logo() {
    return(
        <Pressable style={styles.logoWrapper}>
            <Image style={styles.image} source={require("../../assets/logo.png")} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    logoWrapper: {
        height: "100%",
    },
    image: {
        height: "100%",
        maxWidth: 60,
        maxHeight: 40
    }
});

export default Logo;