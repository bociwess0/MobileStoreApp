import { StyleSheet, Text, Image, Pressable } from "react-native";


function FooterItem(props) {
    return(
        <Pressable key={props.id} style={styles.footerItemWrapper}>
            <Image source={props.image} />
            <Text style={styles.text}>{props.text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    footerItemWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        bottom: 20
    },
    text: {
        color: "#fff",
        fontSize: 12,
        marginTop: 5
    }
});

export default FooterItem;