import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { Modal } from "react-native";

function ValidationPopup(props) {

  const {width, height} = useWindowDimensions();

  const navigation = useNavigation();

  const buttonColor = props.onGoToLogin ? "#B4236C" : "#C93E4D";
  const buttonText = props.onGoToLogin ? "Go to Log In" : "Close";

  function CloseModal() {
    props.onCloseModal();
    if(props.onGoToLogin) {
      navigation.navigate("Login");
    }
  }

  return (
    <Modal animationType="fade" visible={props.modalVisible} transparent={true}>
      <View  style={[styles.modalContainer, {width: width, height: height}]} >
        <View style={[styles.modalWrapper, {width: width - 60}]}>
          <View style={styles.textWrapper}>
            <Text style={{fontSize: 16, color: "#1A1A1A", textAlign: "center"}}>{props.message}</Text>
          </View>
          <Pressable style={({pressed}) => [styles.declineButton, {opacity: pressed ? 0.7 : 1, backgroundColor: buttonColor}]} onPress={CloseModal}>
              <Text style={{color: "#fff"}} >{buttonText}</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "rgba(26, 26, 26, 0.7)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute"
  },

  modalWrapper: {
    backgroundColor: "#e0d3eb",
    borderRadius: 20,
    padding: 20
  },

  textWrapper: {
    width: "100%",
    marginBottom: 50,
  },

  declineButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    height: 30,
    width: "100%",
    marginHorizontal: "auto"
  }

});

export default ValidationPopup;