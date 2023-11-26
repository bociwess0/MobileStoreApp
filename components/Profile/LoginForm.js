import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

function LoginForm() {

    const navigation = useNavigation();

    function goToRegister() {
        navigation.navigate("Register");
    }

    function forgotenPassword() {
        navigation.navigate("ForgotPassword");
    }

    return (
        <View style={styles.loginForm}>
            <Text style={{fontSize: 24, color: "#B4236C", textAlign: "center", fontWeight: 500}} >Log In</Text>
            <View style={{display: "flex", flexDirection: "column", justifyContent: "center",alignItems: "center", gap: 15}}>
                <TextInput style={styles.inputContainer} placeholder="Email" placeholderTextColor="#fff" />
                <TextInput style={styles.inputContainer} placeholder="Password" placeholderTextColor="#fff"  secureTextEntry={true} />
                <Pressable onPress={forgotenPassword}>
                    <Text style={{fontSize: 12, color: "#dea0bf", textAlign: "center", marginBottom: 40}} >Forgot Password?</Text>
                </Pressable>
                <Pressable style={styles.loginButton}>
                    <Text style={{fontSize: 20, color: "#fff", textAlign: "center", fontWeight: 500}}>LOG IN</Text>
                </Pressable>
                <Pressable onPress={goToRegister}>
                    <Text style={{fontSize: 16, color: "#B4236C", textAlign: "center"}} >Sign Up</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    loginForm: {
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

export default LoginForm;