import { StyleSheet, Text, View } from "react-native";

function AvgRating(props) {
    
    return(
        <View style={styles.ratingWrapper}>
            <Text style={{fontSize: 18, color: "#de6f8e"}} >{props.avgRating}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    ratingContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: 35,
    },
    ratingWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        borderColor: "#de6f8e", 
        borderWidth: 2,
        width: 50,
        height: 35,
    }
})

export default AvgRating;