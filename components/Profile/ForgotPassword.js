import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

function ForgotPassword() {

    const navigation = useNavigation();

    function goToLogin() {
        navigation.navigate("Login");
    }

    return (
        <View style={styles.forgotenPasswordForm}>
            <Text style={{fontSize: 24, color: "#B4236C", textAlign: "center", fontWeight: 500}} >Forgotten Password</Text>
            <View style={{display: "flex", flexDirection: "column", justifyContent: "center",alignItems: "center", gap: 15}}>
                <TextInput style={styles.inputContainer} placeholder="New Password" placeholderTextColor="#fff"  secureTextEntry={true} />
                <TextInput style={styles.inputContainer} placeholder="Retype Password" placeholderTextColor="#fff"  secureTextEntry={true} />
                <Pressable onPress={goToLogin}>
                    <Text style={{fontSize: 16, color: "#B4236C", textAlign: "center"}} >Log In</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    forgotenPasswordForm: {
        display: "flex",
        flexDirection: "column",
        gap: 20,
        padding: 20,
        width: "100%",
        height: "100%",
        backgroundColor: "#100156"
    },
    inputContainer: {
        height: 50,
        width: "100%",
        borderRadius: 20,
        fontSize: 14,
        color: "#fff",
        backgroundColor: "rgba(180, 35, 108, 0.5)",
        paddingHorizontal: 10,
        borderColor: "rgba(180, 35, 108, 1)",
        borderWidth: 1
    },
    loginButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#B4236C",
        width: "100%",
        borderRadius: 20,
        height: 50
    }
})

export default ForgotPassword;