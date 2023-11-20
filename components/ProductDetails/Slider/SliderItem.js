import { Image, StyleSheet, View, useWindowDimensions } from "react-native";

function SliderItem(props) {

    const {width} = useWindowDimensions();

    return(
        <View style={[styles.sliderItemWrapper, {width}]} key={Math.random().toString()}>
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
        backgroundColor: "#232442"
    },
    image: {
        resizeMode: "stretch",
        width: 170,
        height: 170,
        borderRadius: 20
    }
})

export default SliderItem;