import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import ValidationPopup from "../../Modals/ValidationPopup";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ValidateFields } from "../Validation/Validation";
import { updateUser } from "../../../redux/profileSlice";
import { addToFavoritesDB, updateUserInDB } from "../../HttpRequests/httpRequests";

function EditProfile() {

    const dispatch = useDispatch();

    const loggedUser = useSelector(state => state.profileActions.loggedUser);
    const favoriteProducts = useSelector(state => state.profileActions.favoriteProducts);
    const [firstName, setFirstName] = useState(loggedUser.firstName);
    const [lastName, setLastName] = useState(loggedUser.lastName);
    const [email, setEmail] = useState(loggedUser.email);
    const [password, setPassword] = useState(loggedUser.password);
    const [address, setAddress] = useState(loggedUser.address);
    const [city, setCity] = useState(loggedUser.city);

    const [modalVisible, setModalVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [fieldsArray, setFieldsArray] = useState([]);

    function fieldPushHandler(type, text) {
        fieldsArray.push({
            type: type,
            text: text
        })
    }

    function closePopupHandler() {
        setModalVisible(false);
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
            setFieldsArray([]);
        } else {
            message = "You have successfully modified your data!"
            
            dispatch(updateUser({user: user}))
            await updateUserInDB({id: loggedUser.id, user: user});
            for(const product of favoriteProducts) {
                await addToFavoritesDB(product);
                
            }
            setErrorMessage(message);
            setModalVisible(true);
            setFieldsArray([]);
        }
    }

    return (
        <View style={styles.registerForm}>
            <Text style={{fontSize: 24, color: "#B4236C", textAlign: "center", fontWeight: 500}} >Edit Profile</Text>
            <View style={{display: "flex", flexDirection: "column", justifyContent: "center",alignItems: "center", gap: 15}}>
                <TextInput style={styles.inputContainer} value={firstName} placeholder="First Name" placeholderTextColor="#fff" onChangeText={(text) => setFirstName(text)} />
                <TextInput style={styles.inputContainer} value={lastName} placeholder="Last Name" placeholderTextColor="#fff" onChangeText={(text) => setLastName(text)} />
                <TextInput style={styles.inputContainer} value={email}placeholder="Email" placeholderTextColor="#fff" onChangeText={(text) => setEmail(text)} />
                <TextInput style={styles.inputContainer} value={password} placeholder="Password" placeholderTextColor="#fff"  secureTextEntry={true} onChangeText={(text) => setPassword(text)} />
                <TextInput style={styles.inputContainer} value={address} placeholder="Address" placeholderTextColor="#fff" onChangeText={(text) => setAddress(text)} />
                <TextInput style={styles.inputContainer} value={city} placeholder="City" placeholderTextColor="#fff" onChangeText={(text) => setCity(text)} />

                <Pressable style={styles.loginButton} onPress={SubmitHandler}>
                    <Text style={{fontSize: 20, color: "#fff", textAlign: "center", fontWeight: 500}}>CHANGE</Text>
                </Pressable>
            </View>
            <ValidationPopup modalVisible={modalVisible} message={errorMessage} onCloseModal={closePopupHandler} />
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

 export default EditProfile;