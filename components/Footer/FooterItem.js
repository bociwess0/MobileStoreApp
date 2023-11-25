import { StyleSheet, Text, Image, View } from "react-native";


function FooterItem(props) {

    return(
        <View style={styles.footerItemWrapper}>
            <Image source={props.image} style={{tintColor: props.focused ? "#C93E4D" : "#fff"}} />
            <Text style={[styles.text, {color: props.focused ? "#C93E4D" : "#fff"}]}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footerItemWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    },
    text: {
        fontSize: 12,
    }
});

export default FooterItem;