import { Pressable, StyleSheet, Text } from "react-native";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/profileSlice";

function LogoutButton() {

    const dispatch = useDispatch();

    function handleLogout() {
        dispatch(logOut());
    }

    return(
        <Pressable onPress={handleLogout}>
            <Text style={{fontSize: 18, color: "#FD881F"}} >Log Out</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({

})

export default LogoutButton;