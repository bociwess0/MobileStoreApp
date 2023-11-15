import { Image, StyleSheet, View } from "react-native";

function SliderItem(props) {

    return(
        <View style={styles.sliderItemWrapper}>
            <Image style={styles.image} source={props.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    sliderItemWrapper: {
        display: "flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#8251F0"
    },
    image: {
        resizeMode: "stretch",
        width: 200,
        height: 200
    }
})

export default SliderItem;