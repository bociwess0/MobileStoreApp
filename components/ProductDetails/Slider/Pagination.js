import { Animated, StyleSheet, View, useWindowDimensions } from "react-native";

function Pagination(props) {

    const {width} = useWindowDimensions();

    return (
        <View style={styles.dotsWrapper}>
            {props.slides.map((dotItem, index) => {

                const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

                const backgroundColor = props.scrollX.interpolate({
                    inputRange,
                    outputRange: ["#9D2177", "#D9583B", "#9D2177"],
                    extrapolate: "clamp"
                })


                return <Animated.View style={[styles.dot, {backgroundColor}]} key = {dotItem.id} />
            })}
        </View>
    )

}

// #D9583B

const styles = StyleSheet.create({
    dotsWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#232442",
        width: "100%",
        paddingBottom: 20
    },

    dot: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: "#9D2177",
        marginHorizontal: 7
    }
})

export default Pagination;