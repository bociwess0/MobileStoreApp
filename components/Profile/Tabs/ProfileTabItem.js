import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { logOut } from "../../../redux/profileSlice";

function ProfileTabItem(props) {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const fontColor = props.logout ? "#FA6051" : "#FFF";

    function handleProfileNavigation() {
        if(!props.logout) {
            navigation.navigate(`${props.navigateTo}`);
        } else {
            dispatch(logOut());
        }
    }

    return (
        <Pressable style={styles.itemWrapper} onPress={handleProfileNavigation}>
            <View style={styles.imgTextWrapper}>
                <Image source={props.image} style={{width: 30, height: 30, resizeMode: 'stretch'}} />
                <Text style={{fontSize: 16, color: fontColor}} >{props.name}</Text>
            </View>
            {!props.logout && <Image source={require("../../../assets/Profile/arrow-right.png")} style={{width: 20, height: 20, resizeMode: 'stretch'}} />}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    itemWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom:  20
    },
    imgTextWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 20
    }
})

export default ProfileTabItem;