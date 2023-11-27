import { Image, Pressable, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import LogoutButton from "./LogoutButton";


function Logo() {

    const userLoggedIn = useSelector(state => state.profileActions.userLoggedIn);

    return(
        <View style={{display: "flex", flexDirection: "row", gap: 20, alignItems: "center"}}>
            {userLoggedIn && <LogoutButton />}
            <Pressable style={styles.logoWrapper}>
                <Image style={styles.image} source={require("../../assets/logo.png")} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    logoWrapper: {
        height: "100%",
    },
    image: {
        height: "100%",
        maxWidth: 25,
        maxHeight: 40,
        resizeMode: "stretch"
    }
});

export default Logo;