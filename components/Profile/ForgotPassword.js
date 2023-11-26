import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { ValidateFields } from "./Validation/Validation";
import ValidationPopup from "../Modals/ValidationPopup";

function ForgotPassword() {

    //variables

    const navigation = useNavigation();

    const [fieldsArray, setFieldsArray] = useState([]);

    const [newPassword, setNewPassword] = useState('');
    const [retypedPassword, setRetypedPassword] = useState('');

    const [modalVisible, setModalVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [goToLoginPage, setGoToLoginPage] = useState(false);


    //functions

    function goToLogin() {
        navigation.navigate("Login");
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
        fieldPushHandler('newPassword', newPassword)
        fieldPushHandler('retypedPassword', retypedPassword)

        let message = ValidateFields(fieldsArray);

        if(message !== "OK") {
            setModalVisible(true);
            setErrorMessage(message);
            setGoToLoginPage(false)
        } else {
            message = "Password is successfully changed! You can now login."
            setErrorMessage(message);

            if(newPassword !== retypedPassword) {
                setErrorMessage("Passwords must be equal!");
                setModalVisible(true);
                setGoToLoginPage(false)
            } else {
                setGoToLoginPage(true)
                setModalVisible(true);
                setFieldsArray([]);
            }
        }
        setFieldsArray([]);
    }

    return (
        <View style={styles.forgotenPasswordForm}>
            <Text style={{fontSize: 24, color: "#B4236C", textAlign: "center", fontWeight: 500}} >Forgotten Password</Text>
            <View style={{display: "flex", flexDirection: "column", justifyContent: "center",alignItems: "center", gap: 15}}>
                <TextInput style={styles.inputContainer} placeholder="New Password" placeholderTextColor="#fff"  secureTextEntry={true} onChangeText={(text) => setNewPassword(text)}/>
                <TextInput style={styles.inputContainer} placeholder="Retype Password" placeholderTextColor="#fff"  secureTextEntry={true} onChangeText={(text) => setRetypedPassword(text)} />
                <Pressable style={styles.loginButton}onPress={SubmitHandler} >
                    <Text style={{fontSize: 20, color: "#fff", textAlign: "center", fontWeight: 500}}>CHANGE PASSWORD</Text>
                </Pressable>
                <Pressable onPress={goToLogin}>
                    <Text style={{fontSize: 16, color: "#B4236C", textAlign: "center"}} >Log In</Text>
                </Pressable>
            </View>
            <ValidationPopup modalVisible={modalVisible} message={errorMessage} onCloseModal={closePopupHandler} onGoToLogin={goToLoginPage}/>
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