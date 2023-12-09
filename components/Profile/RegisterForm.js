import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { ValidateFields } from "./Validation/Validation";
import ValidationPopup from "../Modals/ValidationPopup";
import { registerUser } from "../../redux/profileSlice";
import { useDispatch, useSelector } from "react-redux";
import { registerUserToDB } from "../HttpRequests/httpRequests";

function RegisterForm() {

    const navigation = useNavigation();
    const allUsers = useSelector(state => state.profileActions.users)

    const dispatch = useDispatch();

    function goToLogin() {
        navigation.navigate("Login");
    }

    const [fieldsArray, setFieldsArray] = useState([]);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');

    const [modalVisible, setModalVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [goToLoginPage, setGoToLoginPage] = useState(false);

    function closePopupHandler() {
        setModalVisible(false);
    }

    function fieldPushHandler(type, text) {
        fieldsArray.push({
            type: type,
            text: text
        })
    }

    function userExist(newUser) {
        const foundUser = allUsers.find((user) => user.user.email === newUser.email);
        return foundUser
    }

    async function SubmitHandler() {
        fieldPushHandler('firstName', firstName);
        fieldPushHandler('lastName', lastName)
        fieldPushHandler('email', email)
        fieldPushHandler('password', password)
        fieldPushHandler('address', address)
        fieldPushHandler('city', city);

        let user = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            address: address,
            city: city
        }

        let message = ValidateFields(fieldsArray);

        if(message !== "OK") {
            setModalVisible(true);
            setErrorMessage(message);
            setGoToLoginPage(false)
        } else {
            
            if(!userExist(user)) {
                message = "Registration successful! You can now login."
                let userKey = await registerUserToDB(user);
                let userObj = {
                    id: userKey,
                    user: user
                }
                dispatch(registerUser({user: userObj }));
                setGoToLoginPage(true)
            } else {
                message = "This email already exists in system!"
            }
            
            setErrorMessage(message);
            setModalVisible(true);
        }

        setFieldsArray([]);
    }


    return (
        <View style={styles.registerForm}>
            <Text style={{fontSize: 24, color: "#B4236C", textAlign: "center", fontWeight: 500}} >Registration</Text>
            <View style={{display: "flex", flexDirection: "column", justifyContent: "center",alignItems: "center", gap: 15}}>
                <TextInput style={styles.inputContainer} placeholder="First Name" placeholderTextColor="#fff" onChangeText={(text) => setFirstName(text)} />
                <TextInput style={styles.inputContainer} placeholder="Last Name" placeholderTextColor="#fff" onChangeText={(text) => setLastName(text)} />
                <TextInput style={styles.inputContainer} placeholder="Email" placeholderTextColor="#fff" onChangeText={(text) => setEmail(text)} />
                <TextInput style={styles.inputContainer} placeholder="Password" placeholderTextColor="#fff"  secureTextEntry={true} onChangeText={(text) => setPassword(text)} />
                <TextInput style={styles.inputContainer} placeholder="Address" placeholderTextColor="#fff" onChangeText={(text) => setAddress(text)} />
                <TextInput style={styles.inputContainer} placeholder="City" placeholderTextColor="#fff" onChangeText={(text) => setCity(text)} />

                <Pressable style={({pressed}) => [styles.loginButton, {opacity: pressed ? 0.7 : 1}]} onPress={SubmitHandler}>
                    <Text style={{fontSize: 20, color: "#fff", textAlign: "center", fontWeight: 500}}>SIGN UP</Text>
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
    registerForm: {
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

export default RegisterForm;