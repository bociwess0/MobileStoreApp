import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native"

function CommentForm() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [textArea, setTextArea] = useState('');

    return(
        <View style={styles.commentFormContainer}>
            <Text style={{fontSize: 20, color: "#fff"}}>Leave a comment</Text>
            <View style={styles.commentFormContent}>
                <View style={{display: "flex", flexDirection: "row", gap: 15}}>
                    <TextInput style={[styles.inputContainer, {width: "50%"}]} placeholder="First Name" placeholderTextColor="#fff" onChangeText={(text) => setFirstName(text)} />
                    <TextInput style={[styles.inputContainer, {width: "45%"}]} placeholder="Last Name" placeholderTextColor="#fff" onChangeText={(text) => setLastName(text)} />
                </View>
                <TextInput style={styles.inputContainer} placeholder="Email" placeholderTextColor="#fff" onChangeText={(text) => setEmail(text)} />
                <TextInput
                    style={styles.textArea}
                    placeholder="Type your comment here..."
                    multiline
                    placeholderTextColor="#fff"
                    numberOfLines={4} // Set the number of lines you want to display
                    onChangeText={(newText) => setTextArea(newText)
                    }
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    commentFormContainer: {
        display: "flex",
        flexDirection: "column",
        gap: 10,
        marginTop: 20,
        paddingBottom: 80
    },
    commentFormContent: {
        display: "flex",
        flexDirection: "column",
        gap: 10,
    },
    inputContainer: {
        height: 40,
        width: "100%",
        borderRadius: 20,
        fontSize: 13,
        color: "#fff",
        backgroundColor: "rgba(180, 35, 108, 0.5)",
        paddingHorizontal: 10,
        borderColor: "rgba(180, 35, 108, 1)",
        borderWidth: 1,
    },
    textArea: {
        width: "100%",
        borderRadius: 20,
        fontSize: 14,
        color: "#fff",
        backgroundColor: "rgba(180, 35, 108, 0.5)",
        paddingHorizontal: 10,
        borderColor: "rgba(180, 35, 108, 1)",
        borderWidth: 1,
        textAlignVertical: 'top',
        padding: 10
    }
})

export default CommentForm;