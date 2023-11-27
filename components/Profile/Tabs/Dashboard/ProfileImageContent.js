import { Image, StyleSheet, Text, View } from "react-native";

function ProfileImageContent(props) {
    return (
        <View style={styles.imageContent}>
            <Image style={styles.image} source={require("../../../../assets/Profile/user.png")} />
            <Text style={{fontSize: 16, color: "#fff"}}>{`${props.firstName} ${props.lastName}`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContent: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 20,
        gap: 10,
        borderBottomColor: "#fff",
        borderBottomWidth: 1,
        marginBottom: 20
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'stretch',
    }
})

export default ProfileImageContent;