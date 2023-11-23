import { Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { Modal } from "react-native";

function CartModal(props) {

  const {width, height} = useWindowDimensions();

  function CloseModal() {
    props.onCloseModal();
  }

  return (
    <Modal animationType="fade" visible={props.isModalVisible} transparent={true}>
      <View  style={[styles.modalContainer, {width: width, height: height}]} >
        <View style={[styles.modalWrapper, {width: width - 60}]}>
          <View style={styles.textWrapper}>
            <Text style={{fontSize: 16, color: "#1A1A1A", textAlign: "center"}}>Are you sure you want to submit your order?</Text>
          </View>
          <View style={styles.buttonsWrapper}>
            <Pressable style={styles.confirmButton}>
              <Text style={{color: "#fff"}}>Yes</Text>
            </Pressable>
            <Pressable style={styles.declineButton} onPress={CloseModal}>
              <Text style={{color: "#fff"}} >No</Text>
            </Pressable>
          </View>
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
    // height: "",
    padding: 20
  },

  textWrapper: {
    width: "100%",
    marginBottom: 50,
  },

  buttonsWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    
  },

  confirmButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    height: 30,
    backgroundColor: "#B4236C",
    width: 100
  },

  declineButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    height: 30,
    backgroundColor: "#C93E4D",
    width: 100
  }

});

export default CartModal;