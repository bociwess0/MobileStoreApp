import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import ValidationPopup from "../Modals/ValidationPopup";
import { ValidateFields, ValidateUser } from "./Validation/Validation";
import { useDispatch, useSelector } from "react-redux";
import { logIn, loginUser } from "../../redux/profileSlice";

function LoginForm() {


    //variables
    const navigation = useNavigation();
    const dispatch = useDispatch(); 
    const reigsteredUsers = useSelector(state => state.profileActions.users);

    const [fieldsArray, setFieldsArray] = useState([]);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [modalVisible, setModalVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    //functions

    function goToRegister() {
        navigation.navigate("Register");
    }

    function forgotenPassword() {
        navigation.navigate("ForgotPassword");
    }

    function closePopupHandler() {
        setModalVisible(false);
    }

    function fieldPushHandler(type, text) {
        fieldsArray.push({
            type: type,
            text: text
        })
    }

    function SubmitHandler() {
        fieldPushHandler('email', email)
        fieldPushHandler('password', password)

        let message = ValidateFields(fieldsArray);

        if(message !== "OK") {
            setModalVisible(true);
            setErrorMessage(message);
        } else {
            if(ValidateUser(email, reigsteredUsers)) {
                message = "Login successful!";
                setErrorMessage(message);
                setModalVisible(true);
                setFieldsArray([]);
                dispatch(logIn());
                dispatch(loginUser({
                    user: {
                        email: email,
                        password: password
                    }
                }))
            } else {
                setModalVisible(true);
                setErrorMessage("User not exists.");
            }
        }
        setFieldsArray([]);
    }


    return (
        <View style={styles.loginForm}>
            <Text style={{fontSize: 24, color: "#B4236C", textAlign: "center", fontWeight: 500}} >Log In</Text>
            <View style={{display: "flex", flexDirection: "column", justifyContent: "center",alignItems: "center", gap: 15}}>
                <TextInput style={styles.inputContainer} placeholder="Email" placeholderTextColor="#fff" onChangeText={(text) => setEmail(text)} />
                <TextInput style={styles.inputContainer} placeholder="Password" placeholderTextColor="#fff"  secureTextEntry={true} onChangeText={(text) => setPassword(text)} />
                <Pressable onPress={forgotenPassword}>
                    <Text style={{fontSize: 12, color: "#dea0bf", textAlign: "center", marginBottom: 40}} >Forgot Password?</Text>
                </Pressable>
                <Pressable style={styles.loginButton}onPress={SubmitHandler} >
                    <Text style={{fontSize: 20, color: "#fff", textAlign: "center", fontWeight: 500}}>LOG IN</Text>
                </Pressable>
                <Pressable onPress={goToRegister}>
                    <Text style={{fontSize: 16, color: "#B4236C", textAlign: "center"}} >Sign Up</Text>
                </Pressable>
                <ValidationPopup modalVisible={modalVisible} message={errorMessage} onCloseModal={closePopupHandler} onGoToLogin={false}/>
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