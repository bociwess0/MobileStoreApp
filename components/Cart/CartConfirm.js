import { View, useWindowDimensions } from "react-native";

function CartConfirm() {
    const {width, height} = useWindowDimensions();

    return(
        <View style={{height: height - 150, padding: 20}}>

        </View>
    )

}

export default CartConfirm;