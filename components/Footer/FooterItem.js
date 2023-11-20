import { StyleSheet, Text, Image, Pressable } from "react-native";
import { useDispatch } from "react-redux";
import { showSearch } from "../../redux/searchSlice";


function FooterItem(props) {

    const dispatch = useDispatch();

    function showSearchModalHandler(id) {
        if(id === 2) {
            dispatch(showSearch());
        }
    }

    return(
        <Pressable style={styles.footerItemWrapper} onPress={() => showSearchModalHandler(props.id)}>
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
    },
    text: {
        color: "#fff",
        fontSize: 12,
        marginTop: 5
    }
});

export default FooterItem;